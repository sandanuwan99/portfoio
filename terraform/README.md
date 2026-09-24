# 🌍 Janitha Sandanuwan - Terraform Infrastructure as Code (IaC)

This directory contains production-ready Terraform configurations to automate AWS cloud infrastructure for the Portfolio application.

---

## 📁 Directory Structure & File Roles

| File | Purpose |
| :--- | :--- |
| **[`providers.tf`](file:///d:/My/portfolio/terraform/providers.tf)** | Declares AWS as the cloud provider, minimum version constraints, and global default tags. |
| **[`variables.tf`](file:///d:/My/portfolio/terraform/variables.tf)** | Defines customizable parameters (AWS region, environment name, project identifier). |
| **[`ecr.tf`](file:///d:/My/portfolio/terraform/ecr.tf)** | Creates Amazon ECR repositories for Frontend & Backend with automatic security vulnerability scanning & cost-saving lifecycle rules. |
| **[`outputs.tf`](file:///d:/My/portfolio/terraform/outputs.tf)** | Outputs repository URLs and AWS region needed by CI/CD pipelines (Jenkins). |
| **[`terraform.tfvars.example`](file:///d:/My/portfolio/terraform/terraform.tfvars.example)** | Sample values file to customize variables without modifying code. |

---

## 🛠️ Step 1: Prerequisites Installation

Before running Terraform, you need:
1. **Terraform CLI**:
   ```powershell
   winget install Hashicorp.Terraform
   ```
2. **AWS CLI**:
   ```powershell
   winget install Amazon.AWSCLI
   ```

---

## 🔑 Step 2: Configure AWS Credentials

Run this in your terminal to set your AWS Access Key & Secret Key:
```powershell
aws configure
```
* **AWS Access Key ID**: [Your AWS Access Key]
* **AWS Secret Access Key**: [Your AWS Secret Key]
* **Default region name**: `ap-south-1` (Mumbai) or `us-east-1`
* **Default output format**: `json`

---

## 🚀 Step 3: Run Terraform

Navigate into the `terraform/` directory:
```powershell
cd terraform
```

### 1. Initialize Plugins:
```powershell
terraform init
```
Downloads the official AWS provider plugin.

### 2. Preview Plan (Dry Run):
```powershell
terraform plan
```
Previews all AWS resources that will be created without making changes.

### 3. Deploy to AWS:
```powershell
terraform apply
```
Type `yes` when prompted. Your ECR repositories are created in minutes!

---

## 🧹 Cost Management: Clean Up When Done

To delete all created AWS resources to prevent any charges:
```powershell
terraform destroy
```
