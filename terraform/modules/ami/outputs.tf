output "ami_id" {
  description = "The ID of the latest Amazon Linux 2 AMI"
  value = data.aws_ami.latest_amazon_linux.id
}