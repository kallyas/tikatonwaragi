const { errorMessage, status, successMessage } = require("../helpers/status");
const Helper = require("../helpers/validations.js");
const User = require("../models/userModel");


// Find a single user with a userId
exports.findUs = (req, res) => {
  User.findById(req.params.userId, (err, data)  => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with username  ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};
exports.findUser = (req, res) => {
  User.login(req.params.username, (err, data)  => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with username  ${req.params.username}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with id " + req.params.username,
        });
      }
    } else res.send(data);
  });
};
