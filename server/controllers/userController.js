const { errorMessage, status, successMessage } = require("../helpers/status");
const Helper = require("../helpers/validations.js");
const User = require("../models/userModel");

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a user
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    phone: req.body.phone,
    department: req.body.department,
    user_password: req.body.user_password,
  });

  // Save user in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the user.",
      });
    else res.send(data);

    //   const created_on = moment(new Date());
    if (
      Helper.isEmpty(phone) ||
      Helper.isEmpty(firstname) ||
      Helper.isEmpty(lastname) ||
      Helper.isEmpty(user_password)
    ) {
      errorMessage.error =
        "Mobile Number,First name, last name and password fields cannot be empty";
      return res.status(status.bad).send(errorMessage);
    }
    if (!Helper.isValidPhone(phone)) {
      errorMessage.error = "Please enter a valid Mobile Number";
      return res.status(status.bad).send(errorMessage);
    }
    if (!Helper.validatePassword(password)) {
      errorMessage.error = "Password must be more than eight(8) characters";
      return res.status(status.bad).send(errorMessage);
    }
    
  });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    else res.send(data);
  });
};

// Find a single user with a userId
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

// Update a user identified by the userId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  User.updateById(req.params.userId, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating user with id " + req.params.userId,
        });
      }
    } else res.send(data);
  });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.userId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete user with id " + req.params.userId,
        });
      }
    } else res.send({ message: `user was deleted successfully!` });
  });
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
  User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    else res.send({ message: `All users were deleted successfully!` });
  });
};
