resource "aws_security_group" "web" {
  name = "${var.project_name}-sg"
  description = "Security group for web app"
  vpc_id = var.vpc_id

  # Allow inbound HTTPS traffic (public) to defined ports from anywhere
  dynamic "ingress" {
    for_each = var.ingress_ports
     content {
       from_port = tonumber(ingress.value)
       to_port = tonumber(ingress.value)
       protocol = "tcp"
       cidr_blocks = [ var.ingress_cidr ]
     }
  } 

  # Egress rules (outgoing traffic)

    dynamic "egress" {
    for_each = var.egress_cidr
    content {
      from_port   = 0
      to_port     = 0
      protocol    = "-1"
      cidr_blocks = [egress.value]
    }
  }

  tags = {
    Name = "${var.project_name}-sg"
  }
}