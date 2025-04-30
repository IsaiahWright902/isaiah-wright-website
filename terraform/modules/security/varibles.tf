variable "project_name" {
  type = string
}

variable "vpc_id" {
  type = string
}

variable "ingress_cidr" {
  description = "CIDR block allowed to access the application (public ip range)"
  type = string
  default = "0.0.0.0/0" # Open to all by default
}

variable "ingress_ports" {
  description = "Ports to allow inbound traffic"
  type = list(string)
  default = [ "80", "443", "3000" ]
}

variable "egress_cidr" {
  description = "CIDR block allowed for outbound traffic"
  type = set(string)
  default = ["0.0.0.0/0"] # Open to all by default
}