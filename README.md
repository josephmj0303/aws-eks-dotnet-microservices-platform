# aws-eks-dotnet-microservices-platform
![AWS](https://img.shields.io/badge/Cloud-AWS-orange?logo=amazonaws&logoColor=white)
![Terraform](https://img.shields.io/badge/IaC-Terraform-623CE4?logo=terraform&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Orchestration-Kubernetes-326CE5?logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?logo=docker&logoColor=white)
![.NET](https://img.shields.io/badge/Backend-.NET-512BD4?logo=dotnet&logoColor=white)
![NGINX](https://img.shields.io/badge/Ingress-NGINX-009639?logo=nginx&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)
![Microservices](https://img.shields.io/badge/Architecture-Microservices-blue)
![EKS](https://img.shields.io/badge/AWS-EKS-orange?logo=amazoneks&logoColor=white)

🚀 **Cloud Native .NET Microservices Platform on Amazon EKS**

This project demonstrates how to build, containerize, and deploy a **cloud-native .NET microservices platform** on **Amazon EKS** using **Docker, Kubernetes, Terraform, and GitHub Actions**.

📘 For step-by-step setup and operations, see the deployment guide: [`docs/deployment-guide.md`](docs/deployment-guide.md).

The platform showcases a **production-style DevOps architecture** including CI/CD pipelines, container orchestration, autoscaling, ingress routing, infrastructure as code, and observability.

---

# Architecture Overview

This platform follows a **modern cloud-native microservices architecture** deployed on **Amazon Elastic Kubernetes Service (EKS)**.

Core components include:

* .NET microservices containerized with Docker
* Kubernetes deployments running on Amazon EKS
* GitHub Actions CI/CD pipeline
* DockerHub container registry
* Amazon RDS PostgreSQL database
* NGINX / ALB Ingress for traffic routing
* Prometheus + Grafana monitoring stack
* Terraform infrastructure provisioning

The architecture is designed to simulate **real-world DevOps production environments**.

Architecture diagram:

![Architecture-diagram](docs/architecture/aws-eks-dotnet-platform-architecture.png)

---

# High Level Platform Flow

```
Developer
   │
   ▼
GitHub Repository
   │
   ▼
GitHub Actions Pipeline
   │
   ├─ Build .NET applications
   ├─ Build Docker images
   └─ Push images to DockerHub
          │
          ▼
     Amazon EKS Cluster
          │
          ▼
 Kubernetes Deployments
          │
          ▼
 Ingress Controller (ALB / NGINX)
          │
          ▼
      End Users
```

---

# CI/CD Pipeline Flow

The CI/CD pipeline is implemented using **GitHub Actions**.

```
Code Push
   │
   ▼
GitHub Actions Trigger
   │
   ├─ Restore Dependencies
   ├─ Build .NET Services
   ├─ Build Docker Images
   ├─ Push Images to DockerHub
   └─ Deploy to Amazon EKS
          │
          ▼
   Rolling Kubernetes Deployment
```

Pipeline capabilities:

* Automated Docker builds
* Container registry integration
* Kubernetes deployment automation
* Continuous delivery to EKS

---

# Infrastructure Architecture

The infrastructure is provisioned using **Terraform**.

```
AWS Cloud
│
├── VPC
│
├── Public Subnets
│   │
│   └── Application Load Balancer
│        │
│        ▼
│    Kubernetes Ingress
│
├── Private Subnets
│   │
│   └── Amazon EKS Worker Nodes
│        │
│        ├── School Service Pods
│        ├── Inventory Service Pods
│        ├── Finance Service Pods
│        └── Vivahadeepam Service Pods
│
├── Persistent storage via EBS gp3
│
└── Microsoft SQL Server StatefulSet
```

Key infrastructure components:

* Amazon VPC
* Public and private subnets
* Amazon EKS cluster
* Managed node groups
* Application Load Balancer
* Microsoft SQL Server StatefulSet
* Persistent storage via EBS gp3

---

# Kubernetes Deployment Architecture

All services are deployed within a Kubernetes namespace.

```
Namespace: dotnet-microservices

Pods
│
├── school-service
│
├── finance-service
│
├── inventory-service
│
├── vivahadeepam-service
│
└── monitoring stack
     ├── prometheus
     └── grafana
```

Kubernetes resources used:

* Deployments
* Services (ClusterIP)
* Ingress
* ConfigMaps
* Secrets
* Horizontal Pod Autoscaler (HPA)

---

# Repository Structure

```
aws-eks-dotnet-microservices-platform
│
├── docs
│   │
│   ├── deployment-guide.md
│   │
│   ├── architecture
│   │   └── aws-eks-dotnet-platform-architecture.png
│   │
│   └── screenshots
│       ├── ci-cd-workflow.png
│       ├── eks-cluster.png
│       ├── finance-app.png
│       ├── inventory-app.png
│       ├── k8s-ingress.png
│       ├── k8s-pods.png
│       ├── school-app.png
│       └── vivahadeepam-app.png
│
├── apps
│   │
│   ├── finance
│   │   ├── Dockerfile
│   │   └── published-dll
│   │
│   ├── school
│   │   ├── Dockerfile
│   │   └── published-dll
│   │
│   ├── inventory
│   │   ├── Dockerfile
│   │   └── published-dll
│   │
│   └── vivahadeepam
│       ├── Dockerfile
│       └── published-dll
│
├── database
│   └── restore.sql
│
├── kubernetes
│   ├── autoscaling
│   │   └── hpa.yaml
│   │
│   ├── database
│   │   ├── mssql-statefulset.yaml
│   │   ├── mssql-service.yaml
│   │   └── restore-job.yaml
│   │
│   ├── finance
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   ├── school
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   ├── inventory
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   ├── vivahadeepam
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   ├── storage
│   │   └── gp3-storageclass.yaml
│   │
│   ├── ingress
│   │   └── ingress.yaml
│   │
│   └── namespace.yaml
│
├── monitoring
│   ├── grafana-deploy.yaml
│   ├── grafana-service.yaml
│   ├── prometheus-deploy.yaml
│   └── prometheus-service.yaml
│
├── terraform
│   ├── vpc.tf
│   ├── eks-cluster.tf
│   └── outputs.tf
│
├── .github
│   └── workflows
│       └── eks-ci-cd.yaml
│
├── iam_policy.json
│
└── README.md
```
---
🧪 Validation Endpoints

CI/CD - Workflow
![CI/CD - Workflow](docs/screenshots/ci-cd-workflow.png)

EKS - Cluster
![EKS - Cluster](docs/screenshots/eks-cluster.png)

Ingress Controller
![Ingress Controller](docs/screenshots/k8s-ingress.png)

Pods Running
![Pods Running](docs/screenshots/k8s-pods.png)

App Login
![App Login](docs/screenshots/school-app.png)

![App Login](docs/screenshots/vivahadeepam-app.png)

---

# What This Project Demonstrates

This project showcases several **modern DevOps and cloud-native engineering practices**.

* Containerization of microservices using Docker
* Kubernetes orchestration with Amazon EKS
* Infrastructure provisioning using Terraform
* CI/CD automation using GitHub Actions
* Microservices architecture
* Kubernetes ingress and load balancing
* Auto scaling with Horizontal Pod Autoscaler
* Monitoring with Prometheus and Grafana
* Production-style repository structure

This architecture reflects **real-world DevOps deployment patterns used in modern cloud platforms**.

---

# Skills Demonstrated

This project highlights practical experience with:

**Cloud Platforms**

* AWS
* Amazon EKS
* VPC Networking

**Containerization**

* Docker
* DockerHub

**Container Orchestration**

* Kubernetes
* Deployments
* Services
* Ingress
* Autoscaling

**Infrastructure as Code**

* Terraform
* Modular cloud provisioning

**CI/CD**

* GitHub Actions
* Automated build and deployment pipelines

**Observability**

* Prometheus
* Grafana
* Metrics monitoring

---

## 🔒 Artifact & Repository Structure

This project follows **production-grade DevOps practices** for a cloud-native microservices platform on AWS.

To maintain proper separation of concerns:

* Compiled application artifacts (`.dll` files) and build outputs are **not stored in this public repository**
* Runtime artifacts are managed through **CI/CD pipelines and container registries**
* Sensitive or business-specific components are maintained in **private repositories**

---

## 🚀 Key Takeaway

This repository is designed to reflect **real-world platform engineering practices**, where:

* Source code, infrastructure, and pipelines are public-facing
* Build artifacts and runtime components are **securely managed outside the codebase**
* Deployments are fully automated, reproducible, and environment-agnostic

---

# Future Enhancements

Possible improvements for the platform:

* Helm charts for Kubernetes deployments
* ArgoCD GitOps deployment model
* Distributed tracing with Jaeger
* Service mesh integration (Istio / Linkerd)
* Canary deployments
* Security scanning in CI pipeline

---

# Author

DevOps Engineer Portfolio Project

This repository is part of a **DevOps / Cloud Engineering portfolio demonstrating production-grade infrastructure automation and cloud-native deployments**.
