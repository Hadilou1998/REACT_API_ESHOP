--  ------------------------
--  BDD React_API
--  ------------------------

DROP DATABASE React_API;

CREATE DATABASE React_API;

USE React_API;

--  ------------------------
--  CREATION DES TABLES
--  ------------------------

CREATE TABLE Clients (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL,
    role ENUM('admin', 'user') NOT NULL,
    email VARCHAR(50) NOT NULL,
    adresse VARCHAR(50) NOT NULL
);

CREATE TABLE Products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price FLOAT UNSIGNED NOT NULL,
    link VARCHAR(255) NOT NULL,
    currency VARCHAR(10) NOT NULL,
    id_client INT
);

--  ------------------------
--  INSERTION DES DONNÉES
--  ------------------------

INSERT INTO Clients VALUES
(NULL, 'Arthur123', '', 'user', '', ''),