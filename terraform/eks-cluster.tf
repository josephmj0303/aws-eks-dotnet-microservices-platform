module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "dotnet-microservices"
  cluster_version = "1.29"

  subnet_ids = module.vpc.private_subnets
  vpc_id     = module.vpc.vpc_id

  enable_irsa = true
}
