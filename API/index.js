const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const express = require("express");
const morgan = require("morgan");
const jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const PORT = 8080;
const accessTokenSecret = "key";

// Démarrer Express
const app = express();

// Activation de CORS
app.use(cors());

// Activation de Morgan
app.use(morgan('tiny'));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Connection à la BDD
const conn = mysql.createConnection ({
    host: "localhost",
    user:   "root",
    password:   "hadil",
    database:  "React_API" 
});

// Se connecter à mysql
conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

// Récupération du header bearer
const extractBearerToken = headerValue =>
{
    if (typeof headerValue !== "string") 
    {
        return false;   
    }

    const matches = headerValue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
}

// Vérification du token user
const checkTokenMiddleware = (req, res, next) =>
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);

    // Présence du token
    if (!accessToken) 
    {
        return res.status(401).json
        ({
            message: "We need a token"
        });   
    }

    // Véracité du token
    jsonwebtoken.verify(accessToken, accessTokenSecret, (err, decoded) =>
    {
        if (err) 
        {
            res.status(401).json
            ({
                message: "Invalid Token..."
            });    
        } 
        else 
        {
            return next();    
        }
    });
};

// Vérification du token admin
const checkAdminMiddleware = (req, res, next) =>
{
    const authHeader = req.headers.authorization;
    if (authHeader) 
    {
        const accessToken = authHeader.split(' ')[1];
        
        jsonwebtoken.verify(accessToken, accessTokenSecret, (err, user) =>
        {
            if (err) 
            {
                return res.sendStatus(403);    
            }

            req.user = user;
            next();
        });
    }
    else
    {
        res.sendStatus(401);
    }
};

/* Partie User */

// Add new User
app.post("/register", (req, res) =>
{
    const data = {username: req.body.username, password: req.body.password, role: req.body.role, email: req.body.email, adresse: req.body.adresse, codepostal: req.body.codepostal, ville: req.body.ville}
    const query = conn.query("INSERT INTO Clients SET ?", data, (err, results) =>
    {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// Returns a jwt token
app.post("/login", async (req, res) =>
{
    if (!req.body.username || !req.body.password) 
    {
        return res.status(400).json
        ({
            message: "Please enter your correct username and password"
        });   
    }

    // Checking
    const user = await conn.query("SELECT id, username, role, email, adresse, codepostal, ville WHERE username='"+req.body.username+"' AND password='"+req.body.password+"'", (err, value) =>
    {
        // Not good
        if (!value) 
        {
            return res.status(400).json
            ({
                message: "Invalid username or password"
            });    
        }

        // Generate an access token
        const accessToken = jsonwebtoken.sign
        ({
            id: value[0].id,
            username: value[0].username,
            password: value[0].password,
            role: value[0].role,
            email: value[0].email,
            adresse: value[0].adresse,
            codepostal: value[0].codepostal,
            ville: value[0].ville
        }, accessTokenSecret, { expiresIn: "4 hours" });
    });
});

// listen for requests
app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`);
});