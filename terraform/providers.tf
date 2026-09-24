# =====================================================================
# Terraform & Cloud Provider Configurations
# Janitha Sandanuwan - Enterprise Full-Stack Portfolio
# =====================================================================

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.40"
    }
  }

  # NOTE: In production teams, you can enable remote state with S3 + DynamoDB locking:
  # backend "s3" {
  #   bucket         = "janitha-portfolio-terraform-state"
  #   key            = "production/terraform.tfstate"
  #   region         = "ap-south-1"
  #   dynamodb_table = "terraform-locks"
  #   encrypt        = true
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "Terraform"
      Owner       = "Janitha Sandanuwan"
    }
  }
}
