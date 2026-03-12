# Security Group for RDS
resource "aws_security_group" "rds_sg" {
  name   = "dotnet-rds-sg"
  vpc_id = module.vpc.vpc_id

  ingress {
    from_port   = 1433
    to_port     = 1433
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Subnet group
resource "aws_db_subnet_group" "rds_subnet" {
  name       = "dotnet-rds-subnet"
  subnet_ids = module.vpc.private_subnets

  tags = {
    Name = "dotnet-rds-subnet"
  }
}

# IAM role for S3 restore
resource "aws_iam_role" "rds_s3_restore" {
  name = "rds-s3-restore-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "rds.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

# Attach S3 access policy
resource "aws_iam_role_policy_attachment" "rds_s3_policy" {
  role       = aws_iam_role.rds_s3_restore.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess"
}

# SQL Server option group for backup restore
resource "aws_db_option_group" "sqlserver_backup" {
  name                     = "dotnet-sqlserver-options"
  engine_name              = "sqlserver-ex"
  major_engine_version     = "15.00"

  option {
    option_name = "SQLSERVER_BACKUP_RESTORE"

    option_settings {
      name  = "IAM_ROLE_ARN"
      value = aws_iam_role.rds_s3_restore.arn
    }
  }
}

# RDS Instance
resource "aws_db_instance" "mssql" {

  identifier = "dotnet-sql"

  engine         = "sqlserver-ex"
  engine_version = "15.00"

  instance_class = "db.t3.micro"

  allocated_storage = 20

  username = "dbadmin"
  password = "mtgSQL@881231"

  port = 1433

  db_subnet_group_name   = aws_db_subnet_group.rds_subnet.name
  vpc_security_group_ids = [aws_security_group.rds_sg.id]

  option_group_name = aws_db_option_group.sqlserver_backup.name

  publicly_accessible = false
  skip_final_snapshot = true

  multi_az = false
}
