# Launch template for the EC2 spot instance
resource "aws_launch_template" "latest" {
  name_prefix =  "${var.project_name}-lt-"
  image_id = var.ami_id # AMI Id for base EC2 image
  instance_type = var.instance_type 

  # Bootstraps the server to install Docker and run the container
  user_data = base64encode(<<-EOF
              #!/bin/bash
              yum update -y
              amazon-linux-extras install docker -y
              service docker start
              docker login -u AWS -p $(aws ecr get-login-password --region ${var.aws_region}) ${var.ecr_registry}
              docker pull ${var.image_uri}
              docker run -d -p 3000:3000 --restart always ${var.image_uri}
              EOF
  )
 
  network_interfaces {
    associate_public_ip_address = true
    security_groups = [var.security_group_id]
  }

  instance_market_options {
    market_type = "spot"

    spot_options {}
  }

  tags = {
    Name = "${var.project_name}-lt"
  }
}

# Auto scaling group to ensure the spot instance stays alive
resource "aws_autoscaling_group" "asg" {
  desired_capacity = 1
  min_size = 1
  max_size = 1
  vpc_zone_identifier = [var.subnet_id]

  launch_template {
    id = aws_launch_template.latest.id
    version = "$Latest"
  }

  health_check_type = "EC2"
  health_check_grace_period = 300
  wait_for_capacity_timeout = "0"
  force_delete = true

 tag {
   key = "Name"
   value =  "${var.project_name}-web-instance"
   propagate_at_launch = true
 }
}
