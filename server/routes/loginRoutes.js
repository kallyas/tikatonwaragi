const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Login = require("../controllers/loginController")

//user login
router.post('/login', Login.findUser);
// Renew token
// router.post('/renewToken', Login.generateNewToken);

// user logout
// router.post('/logout', Login.logoutUser);

module.exports = router;