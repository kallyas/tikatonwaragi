// script to seed the database with tables


// open tikaton.sql file and execute the SQL commands
const fs = require("fs");
const pool = require("./models/db");
require("dotenv").config();


// read the file and execute the SQL commands
fs.readFile("./tikaton.sql", "utf8", function (err, data) {
    if (err) throw err;
    var sql = data.split(";");
    sql.forEach(function (query) {
        if (query.length > 0) {
            pool.query(query, function (err, results, fields) {
                if (err) throw err;
            });
        }
    });
});


// close the MySQL connection
pool.end(function (err) {
    // all connections in the pool have ended
});

