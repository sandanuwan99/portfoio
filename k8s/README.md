# ⚓ Janitha Sandanuwan - Kubernetes (K8s) Production Architecture

This directory contains enterprise-grade Kubernetes manifests for running the Full-Stack Portfolio in a distributed, resilient, and auto-healing container cluster.

---

## 📁 Manifest Directory Overview

| File | Purpose |
| :--- | :--- |
| **[`namespace.yaml`](file:///d:/My/portfolio/k8s/namespace.yaml)** | Creates an isolated `portfolio` namespace to keep cluster resources segregated. |
| **[`secrets-config.yaml`](file:///d:/My/portfolio/k8s/secrets-config.yaml)** | Configures environment variables (`ConfigMap`) and sensitive database passwords (`Secret`). |
| **[`sqlserver-deployment.yaml`](file:///d:/My/portfolio/k8s/sqlserver-deployment.yaml)** | MS SQL Server Deployment with 10Gi `PersistentVolumeClaim` (PVC) for persistent state and `ClusterIP` Service. |
| **[`backend-deployment.yaml`](file:///d:/My/portfolio/k8s/backend-deployment.yaml)** | Spring Boot API Deployment with **2 Replicas (High Availability)**, Liveness/Readiness probes (`/actuator/health`), and Zero-Downtime rolling updates. |
| **[`frontend-deployment.yaml`](file:///d:/My/portfolio/k8s/frontend-deployment.yaml)** | Next.js Frontend Deployment with **2 Replicas**, health checks, and `ClusterIP` Service. |
| **[`ingress.yaml`](file:///d:/My/portfolio/k8s/ingress.yaml)** | Ingress routing public traffic: `/api` & `/swagger-ui` -> Backend, `/` -> Frontend. |

---

## 🚀 Quick Deployment Guide

### 1. Apply All Manifests:
```bash
kubectl apply -f k8s/
```

### 2. Verify Workload Status:
```bash
# Check all Pods in the portfolio namespace
kubectl get pods -n portfolio -o wide

# Check Services & Ports
kubectl get svc -n portfolio

# Check Ingress Routing
kubectl get ingress -n portfolio
```

### 3. View Real-Time Logs:
```bash
# Backend Spring Boot logs
kubectl logs -f -l app=portfolio-backend -n portfolio

# Frontend Next.js logs
kubectl logs -f -l app=portfolio-frontend -n portfolio
```

### 4. Delete / Teardown Cluster Workloads:
```bash
kubectl delete -f k8s/
```
