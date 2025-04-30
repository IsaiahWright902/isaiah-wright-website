# Fetches the most recent Amazon Linux 2 AMI that matches the filter criteria
data "aws_ami" "latest_amazon_linux" {
  most_recent = true

  # Only fetch AMI's published by Amazon
  owners = [var.ami_owner]

  # Filter for Amazon Linux 2 general purpose images
  filter {
    name = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }

  filter {
    name = "virtualization-type"
    values = [ "hvm" ]
  }
}