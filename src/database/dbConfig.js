require('dotenv').config();
const mysql = require('mysql2/promise');

// create the connection to database
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

async function checkDatabaseConnection() {
    try {
        await db.execute('SELECT 1');
        console.log('Connected to the database successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    } finally {
        //db.end();
    }
}

checkDatabaseConnection();

module.exports = db