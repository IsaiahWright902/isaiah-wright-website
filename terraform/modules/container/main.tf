# Pull the ECR repo by name
resource "aws_ecr_repository" "repo" {
    name = "${var.repo_name}-repo"

    lifecycle {
      prevent_destroy = true
    }
}
