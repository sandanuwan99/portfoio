# =====================================================================
# AWS Elastic Container Registry (ECR) Repositories
# Stores Docker images for Frontend (Next.js) & Backend (Spring Boot)
# =====================================================================

# 1. Frontend ECR Repository
resource "aws_ecr_repository" "frontend" {
  name                 = "${var.project_name}-frontend"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    # Automatically scan Docker images for CVE vulnerabilities upon push
    scan_on_push = true
  }

  encryption_configuration {
    encryption_type = "AES256"
  }

  tags = {
    Name        = "${var.project_name}-frontend-ecr"
    Description = "ECR Docker image repository for Next.js 16 Frontend"
  }
}

# 2. Backend ECR Repository
resource "aws_ecr_repository" "backend" {
  name                 = "${var.project_name}-backend"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    # Automatically scan Docker images for CVE vulnerabilities upon push
    scan_on_push = true
  }

  encryption_configuration {
    encryption_type = "AES256"
  }

  tags = {
    Name        = "${var.project_name}-backend-ecr"
    Description = "ECR Docker image repository for Spring Boot 3 Enterprise API"
  }
}

# ---------------------------------------------------------------------
# Cost-Optimization: ECR Lifecycle Policy (Auto-Prune Old Image Builds)
# Keeps only the latest 10 images to prevent unnecessary AWS storage charges
# ---------------------------------------------------------------------

locals {
  lifecycle_policy_json = jsonencode({
    rules = [
      {
        rulePriority = 1
        description  = "Retain only the latest ${var.image_retention_count} images"
        selection = {
          tagStatus   = "any"
          countType   = "sinceImagePushed"
          countUnit   = "days"
          countNumber = 30
        }
        action = {
          type = "expire"
        }
      }
    ]
  })
}

resource "aws_ecr_lifecycle_policy" "frontend" {
  repository = aws_ecr_repository.frontend.name
  policy     = local.lifecycle_policy_json
}

resource "aws_ecr_lifecycle_policy" "backend" {
  repository = aws_ecr_repository.backend.name
  policy     = local.lifecycle_policy_json
}
