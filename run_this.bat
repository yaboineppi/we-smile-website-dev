@echo off

rem Set your MySQL username and password
set MYSQL_USER=root
set MYSQL_PASSWORD=

rem Set the database and table names
set DATABASE_NAME=wesmile_db
set TABLE_NAME=users

rem MySQL command to create a database
mysql -u%MYSQL_USER% -p%MYSQL_PASSWORD% -e "CREATE DATABASE IF NOT EXISTS %DATABASE_NAME%;"

rem MySQL command to create tables in the database
mysql -u%MYSQL_USER% -p%MYSQL_PASSWORD% %DATABASE_NAME% -e "
CREATE TABLE IF NOT EXISTS %TABLE_NAME% (
    username VARCHAR(30) PRIMARY KEY,
    password VARCHAR(30),
    name VARCHAR(50),
    phone_number INT(11),
    age INT(2),
    sex VARCHAR(6),
    concerns LONGTEXT
);
"

echo Database and tables created successfully.
pause