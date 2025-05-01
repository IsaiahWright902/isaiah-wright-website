variable "aws_region" {
  type = string
  default = "us-east-2"
}

variable "instance_type" {
  type = string
  default = "t2.micro"
}

variable "base_project_name" {
  description = "Used as the base of tags and resource names for easier filtering"
  default = "IW-Portfolio"
}