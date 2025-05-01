output "ami_id" {
  description = "The ID of the latest Amazon Linux 2 AMI"
  value = data.aws_ami.ubuntu.id
}