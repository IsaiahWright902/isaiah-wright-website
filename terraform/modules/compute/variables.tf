variable "project_name" {
  type = string
}

variable "ami_id" {
  type = string
}

variable "instance_type" {
  type = string
}

variable "ecr_registry" {
  type = string
}

variable "image_uri" {
  description = "The Docker image URI to pull from ECR"
  type = string
}

variable "security_group_id" {
  type = string
}

variable "subnet_id" {
  type = string
}

variable "aws_region" {
  type = string
}
