provider "aws" {
  region = var.aws_region
}

module "networking" {
  source = "./modules/networking"
  project_name = var.base_project_name
  vpc_cidr_block = "10.0.0.0/16"
  subnet_cirdr_block = "10.0.1.0/24"
  rt_cidr_block = "0.0.0.0/0"
  availability_zone = "${var.aws_region}a" 
}

module "security" {
  source = "./modules/security"
  project_name = var.base_project_name
  vpc_id = module.networking.vpc_id 
}

module "ami" {
  source = "./modules/ami"
}

module "container" {
  source = "./modules/container"
  repo_name = "isaiah-wright-portfolio"
}

module "instance" {
  source = "./modules/instance"
  project_name = var.base_project_name
  aws_region = var.aws_region
  ami_id = module.ami.ami_id
  instance_type = var.instance_type
  ssh_key_name = "aws course key pair"
  security_group_id = module.security.security_group_id
  public_subnet_id = module.networking.subnet_id
  ecr_registry = module.container.ecr_repository_uri
  image_uri = module.container.image_uri
}
