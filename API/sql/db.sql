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
    adresse VARCHAR(50) NOT NULL,
    codepostal SMALLINT(5) NOT NULL,
    ville VARCHAR(75) NOT NULL
);

CREATE TABLE Products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price FLOAT UNSIGNED NOT NULL,
    link VARCHAR(255) NOT NULL,
    currency VARCHAR(10) NOT NULL,
    id_client INT
);

--  ------------------------
--  INSERTION DES DONNÉES
--  ------------------------

INSERT INTO Clients VALUES
(NULL   ,   'Arthur123' ,   'arthur0654'    ,   'user'  ,   'arthur.rimbaud@example.com'    ,   '24 Boulevard de la Chapelle'   ,   75018   ,   'Paris'                 ),
(NULL   ,   'Bayane456' ,   'bayane0789'    ,   'admin' ,   'bayane.djebarri@example.com'   ,   '48 Avenue de la Republique'    ,   93300   ,   'Aubervilliers'         ),
(NULL   ,   'Charles789',   'charles0642'   ,   'user'  ,   'charles.debussy@example.com'   ,   '72 Rue de la Liberté'          ,   94500   ,   'Champigny-sur-Marne'   ),
(NULL   ,   'Djamal135' ,   'djamal0791'    ,   'admin' ,   'djamal.rafour@example.com'     ,   '96 Boulevard Aristide Briand'  ,   92400   ,   'Courbevoie'            ),
(NULL   ,   'Emilie246' ,   'emilie0630'    ,   'user'  ,   'emilie.mitchell@example.com'   ,   '120 Avenue des Champs-Elysées' ,   75008   ,   'Paris'                 ),
(NULL   ,   'Fadwa357'  ,   'fadwa0703'     ,   'admin' ,   'fadwa.oussein@example.com'     ,   '144 Rue de Paris'              ,   95400   ,   'Villiers-le-Bel'       ),
(NULL   ,   'Goulam468' ,   'goulam0622'    ,   'user'  ,   'goulam.badoro@example.com'     ,   '168 Boulevard Marcel Sembat'   ,   93200   ,   'Saint-Denis'           ),
(NULL   ,   'Hamida579' ,   'hamida0715'    ,   'admin' ,   'hamida.souef@example.com'      ,   '192 Rue de la Victoire'        ,   93700   ,   'Drancy'                );

INSERT INTO Products VALUES
(NULL   ,   'Adidas',   '', 85.00, 'assets/victoria-baskets-blanches-et-bleues-mixtes.jpg', €, 1),
(NULL   ,   'Adidas',   'Baskets adidas Originals Alphaboost v1',   111.49  ,   'assets/adidas-originals_ig0160_1_footwear_photography_side_lateral_center_view_white.jpg', €, 1),
(NULL   ,   'Nike', 110.00, 'assets/baskets_nike_air_max_excee_noir.jpg', €, 2),
(NULL   ,   '', 00.00, '', €, 2),
(NULL   ,   '', 00.00, '', €, 3),
(NULL   ,   '', 00.00, '', €, 3),
(NULL   ,   '', 00.00, '', €, 4),
(NULL   ,   '', 00.00, '', €, 4),
(NULL   ,   '', 00.00, '', €, 5),
(NULL   ,   '', 00.00, '', €, 5),
(NULL   ,   '', 00.00, '', €, 6),
(NULL   ,   '', 00.00, '', €, 6),
(NULL   ,   '', 00.00, '', €, 7),
(NULL   ,   '', 00.00, '', €, 7),
(NULL   ,   '', 00.00, '', €, 8),
(NULL   ,   '', 00.00, '', €, 8);