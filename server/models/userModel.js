const sql = require("./db.js");
const { errorMessage, status, successMessage } = require("../helpers/status");
const Helper = require("../helpers/validations.js");
const moment = require("moment");

// constructor
const User = function (user) {
  this.id = user.id;
  this.firstName = user.firstName;
  this.lastName = user.lastName;
  this.username = user.username;
  this.phone = user.phone;
  this.department = user.department;
  this.user_password = user.user_password;
};

User.create = (newuser, result) => {
  const generateUserID = () => {
    return "U" + moment(new Date()).format("YYYYMMDDHHmmssSS");
  };

  newuser.id = generateUserID();
  console.log(newuser.id);
  newuser.user_password = Helper.hashPassword(newuser.user_password);
  console.log(newuser.user_password);

  const insertUser =
    "INSERT INTO users (id, firstName,lastName,username,phone,department,user_password)  VALUES(?, ?, ?, ?, ?, ?,?)";
  const values = [
    newuser.id,
    newuser.firstName,
    newuser.lastName,
    newuser.username,
    newuser.phone,
    newuser.department,
    newuser.user_password,
  ];
  // sql.query("INSERT INTO users SET ?", newuser, (err, res) => {
  //   if (err) {
  //     console.log("error: ", err);
  //     result(err, null);
  //     return;
  //   }
  sql.query(insertUser, values, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newuser });
    result(null, { id: res.insertId, ...newuser });
  });
};

User.findById = (id, result) => {
  sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
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

User.getAll = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE users SET email = ?, name = ?, active = ? WHERE id = ?",
    [user.email, user.name, user.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found user with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

User.removeAll = (result) => {
  sql.query("DELETE FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} users`);
    result(null, res);
  });
};

// Login
User.login = (username, result) => {
  const checkUser= "SELECT * FROM users WHERE username = ?";
 
  sql.query(checkUser, [username], (err, res) => {
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
    console.log(result)
    // not found user with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;
