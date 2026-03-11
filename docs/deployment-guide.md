# Deployment Guide

This guide explains how to deploy the **aws-eks-dotnet-microservices-platform** to AWS EKS using the Terraform and Kubernetes manifests included in this repository.

## 1) Prerequisites

Install and configure the following tools:

- AWS CLI v2
- Terraform (>= 1.5 recommended)
- kubectl
- Docker
- An AWS account with permission to create VPC, EKS, EC2, IAM, and RDS resources
- A Docker Hub account for image hosting

Also configure credentials locally:

```bash
aws configure
```

## 2) Clone and enter the repository

```bash
git clone <your-fork-or-repo-url>
cd aws-eks-dotnet-microservices-platform
```

## 3) Provision infrastructure with Terraform

The Terraform configuration under `terraform/` provisions:

- VPC with public/private subnets
- EKS cluster (`dotnet-microservices`)
- EKS managed worker node group (`dotnet-workers`)
- SQL Server RDS instance (`dotnet-sql`)

Run:

```bash
cd terraform
terraform init
terraform plan
terraform apply -auto-approve
```

Optional: inspect outputs.

```bash
terraform output
```

## 4) Configure kubectl access to EKS

From the repository root (or any location with AWS CLI configured):

```bash
aws eks update-kubeconfig --name dotnet-microservices --region us-east-1
kubectl get nodes
```

`kubectl get nodes` should list the `dotnet-workers` nodes in `Ready` state.

## 5) Build and push service images

Set your Docker Hub username:

```bash
export DOCKERHUB_USERNAME=<your-dockerhub-username>
```

Build and push each microservice image:

```bash
docker build -t $DOCKERHUB_USERNAME/finance:latest ./apps/finance
docker push $DOCKERHUB_USERNAME/finance:latest

docker build -t $DOCKERHUB_USERNAME/school:latest ./apps/school
docker push $DOCKERHUB_USERNAME/school:latest

docker build -t $DOCKERHUB_USERNAME/inventory:latest ./apps/inventory
docker push $DOCKERHUB_USERNAME/inventory:latest

docker build -t $DOCKERHUB_USERNAME/vivahadeepam:latest ./apps/vivahadeepam
docker push $DOCKERHUB_USERNAME/vivahadeepam:latest
```

> Make sure Kubernetes deployment manifests reference your Docker Hub namespace/tags.

## 6) Deploy Kubernetes resources

Apply manifests:

```bash
kubectl apply -f kubernetes/
```

Verify rollout:

```bash
kubectl get ns
kubectl get deploy -A
kubectl get svc -A
kubectl get ingress -A
kubectl get hpa -A
```

## 7) Deploy monitoring stack

```bash
kubectl apply -f monitoring/prometheus.yaml
kubectl apply -f monitoring/grafana.yaml
kubectl get pods -A
```

## 8) CI/CD deployment (GitHub Actions)

The repository includes `.github/workflows/eks-ci-cd.yaml`:

- On push to `main`, it builds and pushes Docker images for:
  - `finance`
  - `school`
  - `inventory`
  - `vivahadeepam`
- Then it configures AWS credentials and applies `kubernetes/` manifests to EKS.

Required repository secrets:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `AWS_ACCESS_KEY`
- `AWS_SECRET_KEY`

## 9) Validation checks

Useful post-deployment checks:

```bash
kubectl get pods -A
kubectl get endpoints -A
kubectl describe ingress -A
kubectl top pods -A
```

For troubleshooting:

```bash
kubectl logs -n <namespace> <pod-name>
kubectl describe pod -n <namespace> <pod-name>
```

## 10) Cleanup

Delete Kubernetes resources:

```bash
kubectl delete -f monitoring/
kubectl delete -f kubernetes/
```

Destroy AWS infrastructure:

```bash
cd terraform
terraform destroy -auto-approve
```

---

## Notes

- Keep AWS and Docker Hub credentials in secrets managers (do not hardcode).
- Consider moving Terraform static values (region, instance sizing, DB credentials) into variables for production use.
- Use immutable image tags (for example Git SHA) instead of `latest` for safer rollbacks.
