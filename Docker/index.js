const mysql = require('mysql');

// Create a connection to the database
const dbConn = async() => {
    try
    {
        const conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'supersaiyan',
            database: 'React_API'
        });

        console.log('Successfully connected to the database.');
    } catch (err) {
        console.log(err);
    }
}

dbConn();