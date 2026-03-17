# Deployment Guide

This guide explains how to deploy the **AWS EKS .NET microservices platform** in this repository end-to-end.

## 1) What gets deployed

The deployment provisions and applies:

- AWS infrastructure via Terraform (VPC + EKS cluster)
- SQL Server StatefulSet with gp3-backed persistent storage
- Four .NET microservices (`school`, `inventory`, `finance`, `vivahadeepam`)
- AWS Load Balancer Controller + ALB-backed ingress
- Horizontal Pod Autoscalers for all services
- Optional Prometheus + Grafana monitoring stack

---

## 2) Prerequisites

Install these tools locally:

- AWS CLI v2
- Terraform >= 1.5
- kubectl >= 1.29
- Helm >= 3.14
- Docker (for image build/push)

Required AWS and platform setup:

- AWS account with permissions for EKS, EC2/VPC, IAM, and EBS
- IAM principal with cluster-admin access (or update `access_entries` in `terraform/eks-cluster.tf`)
- DockerHub account (or update image repository references)
- A DNS hosted zone if you want custom hostnames for ingress

Set your CLI credentials:

```bash
aws configure
```

Verify access:

```bash
aws sts get-caller-identity
```

---

## 3) Provision EKS infrastructure with Terraform

From the repository root:

```bash
cd terraform
terraform init
terraform plan
terraform apply -auto-approve
```

This creates:

- `eks-vpc` VPC and subnets
- EKS cluster `dotnet-microservices` (Kubernetes 1.29)
- Managed node group (`t3.medium`, desired size 2)
- IRSA enabled and EBS CSI addon

Export kubeconfig:

```bash
aws eks update-kubeconfig --region us-east-1 --name dotnet-microservices
```

Quick verification:

```bash
kubectl get nodes
```

---

## 4) Build and push service images

The Kubernetes manifests expect images under `josephmj0303/*:latest`.

If you are using your own DockerHub namespace, update image references in these files before deploying:

- `kubernetes/school/deployment.yaml`
- `kubernetes/inventory/deployment.yaml`
- `kubernetes/finance/deployment.yaml`
- `kubernetes/vivahadeepam/deployment.yaml`

Build and push all services:

```bash
export DOCKERHUB_USERNAME=<your-dockerhub-username>
docker login

for svc in finance school inventory vivahadeepam; do
  docker build -t "$DOCKERHUB_USERNAME/$svc:latest" "./apps/$svc"
  docker push "$DOCKERHUB_USERNAME/$svc:latest"
done
```

---

## 5) Install cluster addons

### 5.1 AWS Load Balancer Controller

```bash
helm repo add eks https://aws.github.io/eks-charts
helm repo update

VPC_ID=$(aws eks describe-cluster \
  --name dotnet-microservices \
  --query "cluster.resourcesVpcConfig.vpcId" \
  --output text)

helm upgrade --install aws-load-balancer-controller eks/aws-load-balancer-controller \
  -n kube-system \
  --set clusterName=dotnet-microservices \
  --set serviceAccount.create=true \
  --set region=us-east-1 \
  --set vpcId="$VPC_ID"
```

Wait for rollout:

```bash
kubectl rollout status deployment/aws-load-balancer-controller -n kube-system --timeout=180s
```

### 5.2 Metrics Server (for HPA)

```bash
helm repo add metrics-server https://kubernetes-sigs.github.io/metrics-server
helm repo update

helm upgrade --install metrics-server metrics-server/metrics-server \
  -n kube-system \
  --set args="{--kubelet-insecure-tls}"
```

---

## 6) Create namespaces and secrets

Create app namespace:

```bash
kubectl apply -f kubernetes/namespace.yaml
```

Create database and app connection secrets (replace values before running):

```bash
export MSSQL_SA_PASSWORD='<strong-password>'
export AWS_ACCESS_KEY_ID='<aws-access-key-id>'
export AWS_SECRET_ACCESS_KEY='<aws-secret-access-key>'

kubectl create secret generic mssql-secret \
  --from-literal=SA_PASSWORD="$MSSQL_SA_PASSWORD" \
  -n dotnet-microservices \
  --dry-run=client -o yaml | kubectl apply -f -

kubectl create secret generic financedb-secret \
  --from-literal=connectionstring="Server=mssql;Database=financedb;User Id=sa;Password=$MSSQL_SA_PASSWORD;TrustServerCertificate=True" \
  -n dotnet-microservices \
  --dry-run=client -o yaml | kubectl apply -f -

kubectl create secret generic inventorydb-secret \
  --from-literal=connectionstring="Server=mssql;Database=inventorydb;User Id=sa;Password=$MSSQL_SA_PASSWORD;TrustServerCertificate=True" \
  -n dotnet-microservices \
  --dry-run=client -o yaml | kubectl apply -f -

kubectl create secret generic schooldb-secret \
  --from-literal=connectionstring="Server=mssql;Database=schooldb;User Id=sa;Password=$MSSQL_SA_PASSWORD;TrustServerCertificate=True" \
  -n dotnet-microservices \
  --dry-run=client -o yaml | kubectl apply -f -

kubectl create secret generic vivahadeepamdb-secret \
  --from-literal=connectionstring="Server=mssql;Database=vivahadeepamdb;User Id=sa;Password=$MSSQL_SA_PASSWORD;TrustServerCertificate=True" \
  -n dotnet-microservices \
  --dry-run=client -o yaml | kubectl apply -f -

kubectl create secret generic aws-s3-secret \
  --from-literal=AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" \
  --from-literal=AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY" \
  -n dotnet-microservices \
  --dry-run=client -o yaml | kubectl apply -f -
```

> Note: `kubernetes/database/restore-job.yaml` currently uses a hardcoded SQL password (`TempPass123!`) for `sqlcmd`. Update this to use the same password as `mssql-secret` before running restore jobs.

---

## 7) Deploy workloads

Apply storage class:

```bash
kubectl apply -f kubernetes/storage/
```

Apply SQL Server resources:

```bash
kubectl apply -f kubernetes/database/
```

Deploy all app resources (deployments, services, ingress, HPA):

```bash
kubectl apply -R -f kubernetes/
```

Optional monitoring stack:

```bash
kubectl apply -f monitoring/
```

---

## 8) Validate deployment

Check app namespace:

```bash
kubectl get pods -n dotnet-microservices
kubectl get svc -n dotnet-microservices
kubectl get ingress -n dotnet-microservices
kubectl get hpa -n dotnet-microservices
```

Check monitoring namespace:

```bash
kubectl get pods -n monitoring
kubectl get svc -n monitoring
```

Inspect ingress hostname:

```bash
kubectl get ingress dotnet-ingress -n dotnet-microservices
```

---

## 9) DNS and endpoint routing

Ingress is configured with these hostnames:

- `finance.joedevopslab.xyz`
- `school.joedevopslab.xyz`
- `inventory.joedevopslab.xyz`
- `vivahadeepam.joedevopslab.xyz`

Map each DNS record (CNAME/ALIAS) to the ALB hostname shown in `kubectl get ingress`.

If you are using a different domain, update `kubernetes/ingress/ingress.yaml` and re-apply:

```bash
kubectl apply -f kubernetes/ingress/ingress.yaml
```

---

## 10) CI/CD deployment path (GitHub Actions)

This repo includes `.github/workflows/eks-ci-cd.yaml` that:

1. Builds and pushes Docker images for all four services.
2. Updates kubeconfig for `dotnet-microservices`.
3. Installs ALB Controller + Metrics Server.
4. Creates required Kubernetes secrets.
5. Applies Kubernetes manifests.

Required repository secrets:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `MSSQL_SA_PASSWORD`

Push to `main` to trigger the workflow.

---

## 11) Troubleshooting quick checks

```bash
kubectl describe pods -n dotnet-microservices
kubectl logs -l app=mssql -n dotnet-microservices
kubectl logs -l app=finance -n dotnet-microservices
kubectl get events -n dotnet-microservices --sort-by=.metadata.creationTimestamp
```

If ingress is not provisioning:

- Ensure AWS Load Balancer Controller is running in `kube-system`.
- Confirm subnet tagging required by the controller.
- Verify IAM permissions for ALB resource creation.

If HPA shows unknown metrics:

- Verify Metrics Server pods are running.
- Check `kubectl top pods -n dotnet-microservices` returns data.
