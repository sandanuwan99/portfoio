# =====================================================================
# Terraform Outputs
# Values printed to the console and used by CI/CD Pipelines (Jenkins)
# =====================================================================

output "aws_region" {
  description = "The deployed AWS region"
  value       = var.aws_region
}

output "frontend_ecr_repository_url" {
  description = "The URL of the Frontend ECR repository (used in docker tag and push)"
  value       = aws_ecr_repository.frontend.repository_url
}

output "backend_ecr_repository_url" {
  description = "The URL of the Backend ECR repository (used in docker tag and push)"
  value       = aws_ecr_repository.backend.repository_url
}

output "ecr_registry_id" {
  description = "The AWS Account ID associated with the ECR registry"
  value       = aws_ecr_repository.frontend.registry_id
}
