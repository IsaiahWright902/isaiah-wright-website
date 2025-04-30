provider "aws" {
  region = var.aws_region
}

module "networking" {
  source = "./modules/networking"
  vpc_cidr_block = "10.0.0.0/16"
  subnet_cirdr_block = "10.0.1.0/24"
  availability_zone = "${var.aws_region}a" 
  project_name = var.base_project_name
}

module "security" {
  source = "./modules/security"
  vpc_id = module.networking.vpc_id 
  project_name = var.base_project_name
}

module "ami" {
  source = "./modules/ami"
}

module "container" {
  source = "./modules/container"
  repo_name = "isaiah-wright-portfolio"
}

module "compute" {
  source = "./modules/compute"
  image_uri = module.container.image_uri
  subnet_id = module.networking.subnet_id
  security_group_id = module.security.security_group_id
  aws_region = var.aws_region
  ecr_registry = module.container.ecr_repository_uri
  instance_type = var.instance_type
  ami_id = module.ami.ami_id
  project_name = var.base_project_name
}