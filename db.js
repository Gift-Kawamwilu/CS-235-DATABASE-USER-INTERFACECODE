const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',    // Your MySQL host
    user: 'root',         // Your MySQL username
    password: 'password', // Your MySQL password
    database: 'rent_a_movie' // Your database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

module.exports = db;
