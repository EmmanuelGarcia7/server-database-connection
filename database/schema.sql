DROP DATABASE IF EXISTS demo_db;
CREATE DATABASE demo_db;

USE demo_db;

DROP TABLE IF EXISTS demo_table;
CREATE TABLE demo_table (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  city TEXT NOT NULL
);

INSERT INTO demo_table (name, city) VALUES ('Sebastian', 'Orlando');