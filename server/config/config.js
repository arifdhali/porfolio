const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME
})


connection.connect((err) => {
    if (err) {
        console.error('Database connection error: ' + err.message);
    } else {
        console.log('Database connection successful');
    }
});




module.exports = connection;