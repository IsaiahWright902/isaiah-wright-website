variable "project_name" {
  type = string
}

variable "availability_zone" {
  type = string
  default = "us-east-2"
}

variable "vpc_cidr_block" {
  type = string
}

variable "subnet_cirdr_block" {
  type = string
}

variable "rt_cidr_block" {
  type = string
  description = "public by default"
  default = "0.0.0.0/0"
}



