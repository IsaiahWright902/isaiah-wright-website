resource "aws_iam_role" "ec2_role" {
  name = "${var.project_name}-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "ecr_policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
  role       = aws_iam_role.ec2_role.name
}

# IAM instance profile to attach IAm role to EC2 instance
resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "${var.project_name}-ec2-instance-profile"
  role = aws_iam_role.ec2_role.name
}


resource "aws_instance" "web" {
  ami = var.ami_id
  instance_type = var.instance_type
  key_name = var.ssh_key_name
  subnet_id = var.public_subnet_id 
  security_groups = [ var.security_group_id ]
  iam_instance_profile = "EC2-ECR-ROLE"

  associate_public_ip_address = true

  # User data to install Docker and run the ECR Docker image
  user_data = base64encode(<<-EOF
              #!/bin/bash
              # Update the system and install Docker
              apt-get update -y
              apt-get install -y docker.io
              systemctl start docker
              systemctl enable docker

              # Install AWS CLI and login to ECR
              apt-get install -y awscli
              $(aws ecr get-login-password --region ${var.aws_region} | docker login --username AWS --password-stdin ${var.ecr_registry})

              # Pull the Docker image from ECR
              docker pull ${var.image_uri}

              # Run the Docker container
              docker run -d -p 3000:3000 --restart always ${var.image_uri}
              EOF
  )

  tags = {
    Name = "${var.project_name}-web-instance"
  }
}