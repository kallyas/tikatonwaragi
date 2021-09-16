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

  let material = `create table if not exists material(
    id int primary key auto_increment,
    materialName varchar(255)not null,
    quantity varchar(20)not null,
    unitCost varchar(20)not null,
    rate varchar(20)not null,
    total varchar(20)not null,
    date varchar(20)not null,
    supplierId varchar(255)not null,
    
)`;

});
 

module.exports = pool;