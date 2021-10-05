const { errorMessage, status, successMessage } = require("../helpers/status");
const Helper = require("../helpers/validations.js");
const User = require("../models/userModel");


// 


// Find a single user with a userId
exports.findUs = (req, res) => {
// 


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

  
// find a user
const user = new User({
  id:req.body.id,
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  username: req.body.username,
  phone: req.body.phone,
  department: req.body.department,
  user_password: req.body.user_password,
});

  User.login(req.params.username, (err, data)  => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with username  ${req.params.username}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with username " + req.params.username,
        });
      }
    } else {
      const token = Helper.generateUserToken(
       id, firstName, lastName, username, department, phone, user_password
      );
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
      // const refreshToken = Helper.generateRefreshToken(user.user_id, user.firstname, user.lastname, user.email, user.mobilenumber, user.dob, user.gender, user.currency, user.country);
      delete user_password;
      successMessage.data = user;
      successMessage.data.token = token;
      successMessage.data.refreshToken = refreshToken;
      // refreshTokens.push(refreshToken)
      console.log(refreshToken);
  
      //saving the token in a cookie
      res.cookie('access_token', token, {maxAge: 1800000, httpOnly: true});
      // res.cookie('refresh_token', refreshToken, { maxAge: 3.154e10, httpOnly: true });
      return res.status(status.success).send(successMessage);
      res.send(data)};
  });
};
