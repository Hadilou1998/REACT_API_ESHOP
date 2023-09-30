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

/* Partie Customer */

// Add new Customer
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
    const user = await conn.query("SELECT id, username, role, email, adresse, codepostal, ville FROM Clients WHERE username='"+req.body.username+"' AND password='"+req.body.password+"'", (err, value) =>
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

        return res.json
        ({
            access_token: accessToken
        });
    });
});

// Retrieve current customer info
app.get("/me", checkTokenMiddleware, async (req, res) =>
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const decoded = jsonwebtoken.decode(accessToken, { complete : false });

    return res.json( decoded );
});

// Retrieve all Customers
app.get("/customers", (req, res) =>
{
    // Requête d'éxecution
    const sql = "SELECT * FROM Clients";
    const query = conn.query(sql, (err, results) =>
    {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// Update a Customer with customerId
app.put("/customer/:id", checkAdminMiddleware, async (req, res) =>
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const customer = jsonwebtoken.decode(accessToken, { complete : false });

    // Vérifie si le client est admin
    const { role, id } = req.body;

    if (role && id) 
    {
        if (role == "admin") 
        {
            const id = req.params.id;
            const sql = "UPDATE Clients SET username='"+req.body.username+"', password='"+req.body.password+"', role='"+req.body.role+"', email='"+req.body.email+"', adresse='"+req.body.adresse+"', codepostal='"+req.body.codepostal+"', ville='"+req.body.ville+"' WHERE id = "+req.params.id;
            const query = await conn.query(sql, (err, results) =>
            {
                if (!err) 
                {
                    console.log("Customer Updated Successfully");   
                } 
                else 
                {
                    console.log(err);    
                }
            });    
        }
        else 
        {
            return res.status(400).json
            ({
                error: true,
                message: "Access Denied"
            });
        }   
    }
    else
    {
        return res.status(400).json
        ({
            message: "Role and Id doesn't exist"
        });
    }
});

// Retrieve customer info
app.get("/customer/:id", checkAdminMiddleware, async (req, res) =>
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const customer = jsonwebtoken.decode(accessToken, { complete : false });

    // Vérifie si le client est admin
    const { role, id } = req.body;

    if (role && id) 
    {
        if (role == "admin") 
        {
            const id = req.params.id;
            const sql = "SELECT * FROM Clients WHERE id = "+req.params.id;
            const query = await conn.query(sql, (err, results) =>
            {
                if (!err) 
                {
                    console.log("Infos of customer retrieved");   
                } 
                else 
                {
                    console.log(err);    
                }
            });    
        }
        else 
        {
            return res.status(400).json
            ({
                error: true,
                message: "Access Denied"
            });
        }       
    } 
    else 
    { 
        return res.status(400).json
        ({
            message: "Role and Id doesn't exist"
        });
    }
});

// Delete a Customer with customerId
app.delete("/customer/:id", checkAdminMiddleware, async (req, res) =>
{
    // Récupération du token
    const accessToken = req.headers.authorization && extractBearerToken(req.headers.authorization);
    // Décodage du token
    const customer = jsonwebtoken.decode(accessToken, { complete : false });

    // Vérifier si le client est admin
    customer.role, customer.id;

    if (customer.id == req.params.id && customer.role == "user") 
    {
        const id = req.params.id;
        const sql = "DELETE FROM Clients WHERE id = "+req.params.id;
        const query = await conn.query(sql, (err, results) =>
        {
            if (err) 
            {
                console.log("Customer Deleted Failed");    
            } 
            else 
            {
                console.log("Customer Deleted Successfully");                
            }
        });    
    } 
    else 
    {
        if (customer.role == "admin") 
        {
            const id = req.params.id;
            const sql = "DELETE FROM Clients WHERE id = "+req.params.id;
            const query = await conn.query(sql, (err, results) =>
            {
                if (err) 
                {
                    console.log("Customer Deleted Failed");    
                } 
                else 
                {
                    console.log("Customer Deleted Successfully");                
                }
            });    
        }
    }
});

// Delete all Customers
app.delete("/customers", (req, res) =>
{
    // Requête d'éxecution
    const sql = "DELETE FROM Clients";
    const query = conn.query(sql, (err, results) =>
    {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

/* Fin partie Customer */

// listen for requests
app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`);
});