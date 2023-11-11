# we-smile-website-dev
DO NOT DISTRIBUTE ANY FILES FOUND INSIDE THIS REPOSITORY, THANK YOU...
UPLOAD NECCESSARY FILES
DOWNLOAD THE DESKTOP APP FOR GITHUB

INTERACTING WITH THE WEBSITE AND DB USING XAMPP;
- DOWNLOAD FILES THAT ARE REQUIRED (register.html, admin.html, scripts, and styles) AND PLACE THEM IN THE DIRECTORY C:\xampp\htdocs
- OPEN XAMPP CONTROL PANEL AND START APACHE AND MYSQL
- THEN START YOUR BROWSER AND TYPE IN THE URL localhost/phpmyadmin/ ~ accessing the db and localhost/name_of_file.exe
- TEST THE PROGRAMS

SETTING UP DB;
- GO TO THE URL localhost/phpmyadmin AND RUN THE FOLLOWING SQL QUERY
  -- Create the database
  CREATE DATABASE IF NOT EXISTS wesmile_db;

  -- Switch to the newly created database
  USE wesmile_db;

  -- Create the users table
  CREATE TABLE IF NOT EXISTS users (
      username VARCHAR(30) PRIMARY KEY,
      password VARCHAR(30),
      name VARCHAR(50),
      phone_number INT(11),
      age INT(2),
      sex VARCHAR(6),
      concerns LONGTEXT
  );
- ONCE DONE, DB SHOULD BE READY TO GO