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
    set -e  # Exit on error

    # Update system and install required packages
    apt-get update -y
    apt-get install -y docker.io nginx certbot python3-certbot-nginx awscli

    # Start and enable services
    systemctl start docker
    systemctl enable docker
    systemctl start nginx
    systemctl enable nginx

    # Login to ECR and pull the Docker image
    aws ecr get-login-password --region ${var.aws_region} | docker login --username AWS --password-stdin ${var.ecr_registry}
    docker pull ${var.image_uri}

    # Run the Docker container
    docker run -d -p 3000:3000 --restart always --name app ${var.image_uri}

    # Create self-signed certificate
    mkdir -p /etc/ssl/private /etc/ssl/certs
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
      -keyout /etc/ssl/private/selfsigned.key \
      -out /etc/ssl/certs/selfsigned.crt \
      -subj "/C=US/ST=State/L=City/O=Organization/CN=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"

    # Create Nginx configuration for HTTPS
    cat > /etc/nginx/sites-available/default <<-EOL
    server {
        listen 80;
        listen [::]:80;
        server_name _;
        
        # Redirect all HTTP traffic to HTTPS
        return 301 https://$host$request_uri;
    }

    server {
        listen 443 ssl;
        listen [::]:443 ssl;
        server_name _;
        
        # SSL configuration
        ssl_certificate /etc/ssl/certs/selfsigned.crt;
        ssl_certificate_key /etc/ssl/private/selfsigned.key;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_prefer_server_ciphers on;
        ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
        
        # Buffer settings
        proxy_buffer_size 128k;
        proxy_buffers 4 256k;
        proxy_busy_buffers_size 256k;
        
        # Proxy settings for the application
        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host \$host;
            proxy_set_header X-Real-IP \$remote_addr;
            proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto \$scheme;
            proxy_cache_bypass \$http_upgrade;
        }
    }
    EOL

    # Create symbolic link to enable the site
    ln -sf /etc/nginx/sites-available/default /etc/nginx/sites-enabled/

    # Test nginx configuration
    nginx -t

    # Reload nginx to apply changes
    systemctl reload nginx

    # Output status information for debugging
    echo "HTTPS setup complete. App running on port 3000, proxied through Nginx HTTPS."
    echo "Instance public IP: $(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
    docker ps
    systemctl status nginx | grep active
  EOF
  )

  tags = {
    Name = "${var.project_name}-web-instance"
  }
}