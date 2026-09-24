# =====================================================================
# Terraform Input Variables
# =====================================================================

variable "aws_region" {
  description = "The AWS region where resources will be deployed (e.g. ap-south-1 for Mumbai, us-east-1 for N. Virginia)"
  type        = string
  default     = "ap-south-1"
}

variable "environment" {
  description = "Deployment environment (development, staging, production)"
  type        = string
  default     = "production"
}

variable "project_name" {
  description = "Base project identifier used for tagging and resource naming"
  type        = string
  default     = "janitha-portfolio"
}

variable "image_retention_count" {
  description = "Number of recent Docker images to keep in ECR before pruning older builds (saves storage cost)"
  type        = number
  default     = 10
}
