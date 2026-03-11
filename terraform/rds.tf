resource "aws_db_instance" "mssql" {

  identifier = "dotnet-sql"

  engine         = "sqlserver-ex"
  engine_version = "15.00"

  instance_class = "db.t3.micro"

  allocated_storage = 20

  username = "dbadmin"
  password = "mtgSQL@881231"

  skip_final_snapshot = true
}
