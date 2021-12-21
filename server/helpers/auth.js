const jwt = require('jsonwebtoken');
const { errorMessage, status } = require('./status');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');


dotenv.config()


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




/**
 * Hash Password Method
 * @param {string} user_password
 * @returns {string} returns hashed password
 */
const hashPassword = (user_password) => {
  return bcrypt.hashSync(user_password, bcrypt.genSaltSync(8))
}
/**
 * comparePassword
 * @param {string} hashPassword 
 * @param {string} user_password 
 * @returns {Boolean} return True or False
 */
const comparePassword = (hashPassword, user_password) => {
  return bcrypt.compareSync(user_password, hashPassword);
}


/**
   * isValidEmail helper method
   * @param {string} username
   * @returns {Boolean} True or False
   */
const isValidUserName = (username) => {
  const regEx = /^[A-Za-z0-9_]{10}$/;
  return regEx.test(username);
};

const isValidPhone = (phone) => {
  const regEx = /^[0-9]{10}$/;
  return regEx.test(phone)
}

/**
   * validatePassword helper method
   * @param {string} password
   * @returns {Boolean} True or False
   */
const validatePassword = (user_password) => {
  if (user_password.length <= 8 || user_password === '') {
    return false;
  } return true;
};
/**
   * isEmpty helper method
   * @param {string, integer} input
   * @returns {Boolean} True or False
   */
const isEmpty = (input) => {
  if (input === undefined || input === '') {
    return true;
  }
  // if (input.replace(/\s/g, '').length) {
  //   return false;
  // } return true;
};

/**
   * empty helper method
   * @param {string, integer} input
   * @returns {Boolean} True or False
   */
const empty = (input) => {
  if (input === undefined || input === '') {
    return true;
  }
};

const generateUserToken = (id, firstName, lastName, username, phone, department) => {
  const token = jwt.sign({
    id,
    firstName,
    lastName,
    username,
    phone,
    department
  },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: 30000 });
  return token;

};

const generateRefreshToken = (id, firstName, lastName, username, phone, department) => {
  const refreshToken = jwt.sign({
    id,
    firstName,
    lastName,
    username,
    phone,
    department
  },
    process.env.REFRESH_TOKEN_SECRET)
  return refreshToken;

};

module.exports = {
  hashPassword,
  isValidUserName,
  isValidPhone,
  validatePassword,
  comparePassword,
  isEmpty,
  empty,
  generateUserToken,
  generateRefreshToken
};