const mysql = require("mysql2");
const dotenv = require('dotenv');
dotenv.config();


// Create a connection to the database

const pool = mysql.createPool({
    host     : process.env.HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE
  });

// open the MySQL connection
pool.getConnection(function(err, connection) {
    
  
// Use the connection 
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

  
});
 

module.exports = pool;