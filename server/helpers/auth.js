const jwt = require('jsonwebtoken');
const { errorMessage, status } = require('./status');
const dotenv = require('dotenv');

dotenv.config();

/**
   * Verify Token
   * @param {object} req 
   * @param {object} res 
   * @param {object} next
   * @returns {object|void} response object 
   */

const verifyToken = async (req, res, next) => {
    const {access_token} = req.cookies;
    // const authHeader = req.headers['authorization'];
    // const token = authHeader.split(' ')[1];
    if (!access_token) {
        // redirect to login page
        // errorMessage.error = 'access_token not provided';
        // return res.status(status.bad).send(errorMessage);
        return next();
    }
    try {
        const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET);
        req.user = {
            id: decoded.id,
            firstName: decoded.firstName,
            lastName: decoded.lastName,
            username: decoded.username,
           
            phone: decoded.phone,
           departnent:decoded.departnent
        };
        next();

        
    } catch (error) {
        errorMessage.error = 'Authentication Failed';
        return res.status(status.unauthorized).send(errorMessage);
        // res.clearCookie('token')
    }
};

module.exports = { verifyToken };

//sign JWT token for authenticated user
const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
           expiresIn: process.env.JWT_EXPIRES_IN
    });
 }