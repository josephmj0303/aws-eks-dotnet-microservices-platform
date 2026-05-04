terraform {
  backend "s3" {
    bucket         = "dotnet-microservices-terraform-state"
    key            = "eks/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
