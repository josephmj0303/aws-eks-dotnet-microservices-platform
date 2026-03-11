resource "aws_eks_node_group" "workers" {

  cluster_name    = module.eks.cluster_name
  node_group_name = "dotnet-workers"
  node_role_arn   = module.eks.node_iam_role_arn
  subnet_ids      = module.vpc.private_subnets

  scaling_config {
    desired_size = 2
    max_size     = 4
    min_size     = 2
  }

  instance_types = ["t3.medium"]
}
