resource "aws_vpc" "main" {
    cidr_block = var.vpc_cidr_block

    tags = {
      Name = "${var.project_name}-vpc"
    }
} 

resource "aws_subnet" "public" {
  vpc_id = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-2a"
  map_public_ip_on_launch = true

  tags = {
    Name = "${var.project_name}-subnet"
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "${var.project_name}-ig"
  }
}

resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
     Name = "${var.project_name}-rt"
  }
}

resource "aws_route_table_association" "public_assoc" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public_rt.id
}



# resource "aws_subnet" "public" {
#   vpc_id = aws_vpc.main.id
#   cidr_block = var.subnet_cirdr_block
#   map_public_ip_on_launch = true

#   tags = {
#     Name = "${var.project_name}-subnet"
#   }
# }
 
# Internet gateway to allow public internet access
# resource "aws_internet_gateway" "igw" {
#   vpc_id = aws_vpc.main.id

#   tags = {
#     Name = "${var.project_name}-ig"
#   }
# }

# Route table for routing internet traffic through the gateway 
# resource "aws_route_table" "rt" {
#   vpc_id = aws_vpc.main.id

#   route { 
#     cidr_block = "0.0.0.0/0"
#     gateway_id = aws_internet_gateway.igw.id
#   }

#   tags = {
#     Name = "${var.project_name}-rt"
#   }
# }

# resource "aws_route_table_association" "rt_assoc" {
#   subnet_id = aws_subnet.public.id
#   route_table_id = aws_route_table.rt.id
# }