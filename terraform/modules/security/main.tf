resource "aws_security_group" "web" {
  name = "${var.project_name}-sg"
  description = "Allow inbound SSH and all traffic"
  vpc_id = var.vpc_id

  ingress  {
    from_port = 0
    to_port = 65535
    protocol = "tcp"
    cidr_blocks = [var.ingress_cidr]
  }

  egress  {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = [var.egress_cidr]
  }

  tags = {
    Name = "${var.project_name}-sg"
  }
}