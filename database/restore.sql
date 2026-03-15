RESTORE DATABASE financedb
FROM DISK = '/var/opt/mssql/backup/financedb.bak'
WITH MOVE 'financedb' TO '/var/opt/mssql/data/financedb.mdf',
     MOVE 'financedb_log' TO '/var/opt/mssql/data/financedb_log.ldf',
     REPLACE;
GO

RESTORE DATABASE inventorydb
FROM DISK = '/var/opt/mssql/backup/inventorydb.bak'
WITH MOVE 'inventorydb' TO '/var/opt/mssql/data/inventorydb.mdf',
     MOVE 'inventorydb_log' TO '/var/opt/mssql/data/inventorydb_log.ldf',
     REPLACE;
GO

RESTORE DATABASE schooldb
FROM DISK = '/var/opt/mssql/backup/schooldb.bak'
WITH MOVE 'schooldb' TO '/var/opt/mssql/data/schooldb.mdf',
     MOVE 'schooldb_log' TO '/var/opt/mssql/data/schooldb_log.ldf',
     REPLACE;
GO

RESTORE DATABASE vivahadeepamdb
FROM DISK = '/var/opt/mssql/backup/vivahadeepamdb.bak'
WITH MOVE 'vivahadeepamdb' TO '/var/opt/mssql/data/vivahadeepamdb.mdf',
     MOVE 'vivahadeepamdb_log' TO '/var/opt/mssql/data/vivahadeepamdb_log.ldf',
     REPLACE;
GO

