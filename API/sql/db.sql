--  ------------------------
--  BDD React_API
--  ------------------------

DROP DATABASE React_API;

CREATE DATABASE React_API;

USE React_API;

--  ------------------------
--  CREATION DES TABLES
--  ------------------------

CREATE TABLE IF NOT EXISTS Clients (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL,
    role ENUM('admin', 'user') NOT NULL,
    email VARCHAR(50) NOT NULL,
    adresse VARCHAR(50) NOT NULL,
    codepostal CHAR(5) NOT NULL,
    ville VARCHAR(75) NOT NULL
);

CREATE TABLE IF NOT EXISTS Products (
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

(NULL   ,   'Victoria'      ,   'Baskets mixtes rétro en cuir blanc'                            ,   85.00   ,   'assets/victoria-baskets-blanches-et-bleues-mixtes.jpg'                                     ,'€', 1),
(NULL   ,   'Adidas'        ,   'Baskets adidas Originals Alphaboost v1'                        ,   111.49  ,   'assets/adidas-originals_ig0160_1_footwear_photography_side_lateral_center_view_white.jpg'  ,'€', 1),
(NULL   ,   'Nike'          ,   'Baskets nike air max excee noir'                               ,   110.00  ,   'assets/baskets_nike_air_max_excee_noir.jpg'                                                ,'€', 2),
(NULL   ,   'Adidas'        ,   'Baskets originals chaussure samba og'                          ,   120.00  ,   'assets/adidas_originals_chaussure_samba_og.jpg'                                            ,'€', 2),
(NULL   ,   'Nike'          ,   'Baskets nike p6000 metallic silver'                            ,   110.00  ,   'assets/nike-p6000-metallic-silver-01.jpg'                                                  ,'€', 3),
(NULL   ,   'Nike'          ,   'Baskets nike air dunk jumbo mint foam'                         ,   120.00  ,   'assets/Nike-Air-Dunk-Jumbo-Mint-Foam-700x500.jpg'                                          ,'€', 3),
(NULL   ,   'Puma'          ,   'Baskets NOIR PUMA smash V2 SD'                                 ,   53.99   ,   'assets/baskets-noir-puma-smash-v2-sd.jpg'                                                  ,'€', 4),
(NULL   ,   'Adidas'        ,   'Chaussures adidas Sportswear ADVANTAGE'                        ,   63.80   ,   'assets/adidas-advantage-sportswear.jpg'                                                    ,'€', 4),
(NULL   ,   'Converse'      ,   'Baskets mode femme Converse chuck taylor all star lift blanc'  ,   89.90   ,   'assets/baskets-converse-chuck-taylor-all-star-lift-blanc.jpg'                              ,'€', 5),
(NULL   ,   'Vans'          ,   'Vans SK8-HI Noir/Blanc'                                        ,   72.00   ,   'assets/vans-baskets-montantes-en-toile-ua-sk8-hi-noir-bla.jpg'                             ,'€', 5),
(NULL   ,   'Vans'          ,   'Vans Baskets Era Lacets Elastiqués Camouflage Vert Kaki'       ,   40.00   ,   'assets/baskets-era-lacets-elastiques-camouflage.jpg'                                       ,'€', 6),
(NULL   ,   'Nike'          ,   'Nike Dunk Low Twist "Panda"'                                   ,   120.00  ,   'assets/nike-dunk-twist-panda-black-white-3.jpg'                                            ,'€', 6),
(NULL   ,   'Adidas'        ,   'Adidas Originals Campus 00s dark green'                        ,   110.00  ,   'assets/adidas_originals_campus_00s_dark_green.jpg'                                         ,'€', 7),
(NULL   ,   'New Balance'   ,   'New Balance 2002R "Phantom"'                                   ,   130.00  ,   'assets/new-balance-2002r-phantom-m2002rho-banner.jpg'                                      ,'€', 7),
(NULL   ,   'Converse'      ,   'Converse chuck taylor all star hi white'                       ,   60.00   ,   'assets/converse-chuck-taylor-all-star-hi-white-50.jpg'                                     ,'€', 8),
(NULL   ,   'New Balance'   ,   'New Balance 327'                                               ,   130.00  ,   'assets/new-balance-327.jpg'                                                                ,'€', 8);  
                                                                                                                                                                                                    
