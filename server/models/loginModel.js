const sql = require("./db.js");
const { errorMessage, status, successMessage } = require('../helpers/status')
const Helper = require('../helpers/validations.js');
const moment = require('moment')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const conn = require('../dbConnection').promise();


exports.login = async (req,res,next) =>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }

    sql.query('SELECT * FROM users WHERE username = ?', [username], async(error, results) => {
        console.log(results);
        if(!results || !(await bcrypt.compare(user_password, results[0].user_password))) {
            return res.send("<script> alert('Email or Password is incorrect'); window.location='/login'; </script>");
        }
        else {
            const id = results[0].id;
            const token = jwt.sign({ id }, process.env.SECRET_JWT, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            console.log("The token is: " + token);
            const cookieOptions = {
                expires: new Date(
                    Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                ),
                httpOnly: true
            }
            req.session.login = true;
            req.session.username = username;
            res.cookie('jwt', token, cookieOptions);
            res.status(200).redirect('/profile');
        }
    });

       
}