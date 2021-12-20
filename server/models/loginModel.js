const sql = require("./db.js");
const { errorMessage, status, successMessage } = require("../helpers/status");
const Helper = require("../helpers/validations.js");
const moment = require("moment");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserLogin = function (user) {
  this.id = user.id;
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.username = user.username;
  this.phone = user.phone;
  this.department = user.department;
  this.user_password = user.user_password;
};

UserLogin.loginUser = (user, result) => {

  sql.query(
    "SELECT * FROM users WHERE username = ? AND user_password = ?",
    [user.username, user.user_password],
    function (err, result, fields) {
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.username = username;
        response.redirect("/admin");
      } else {


        response.send("Incorrect Username and/or Password!");
      }
      console.log("Logged in user: ", { id: response.insertId, ...newuser });
    result(null, { id: response.insertId, ...newuser });
      response.end();
    }
  );
};

UserLogin.login = (username, result) => {

  const token = jwt.sign({
    username: result[0].username,
    id: result[0].id
  },
  'SECRETKEY', {
    expiresIn: '7d'
  }
);
  sql.query(`SELECT * FROM users WHERE username = ${username}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found user with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = UserLogin;
