const sql = require("../models/db");
const { errorMessage, status, successMessage } = require('../helpers/status')
const Helper = require('../helpers/validations');
const moment = require('moment')

const jwt = require('jsonwebtoken');


exports.login = async (req,res,next) =>{
    const {username, user_password} = req.body;
    if (Helper.isEmpty(username) || Helper.isEmpty(user_password)) {
        errorMessage.error = 'Mobile Number or Password detail is missing';
        return res.status(status.bad).send(errorMessage);
      }
      if (
        !Helper.isValidMobileNumber(username) ||
        !Helper.validatePassword(user_password)
      ) {
        errorMessage.error = 'Please enter a valid Mobile Number or Password';
        return res.status(status.bad).send(errorMessage);
      }
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


}
