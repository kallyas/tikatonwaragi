
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()


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
  if (input.replace(/\s/g, '').length) {
    return false;
  } return true;
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

const generateUserToken = (id, firstname, lastname, username, phone, department) => {
  const token = jwt.sign({
    id,
    firstname,
    lastname,
    username,
    phone,
    department
  },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '30m' });
  return token;

};

const generateRefreshToken = (id, firstname, lastname, username, phone, department) => {
  const refreshToken = jwt.sign({
    id,
    firstname,
    lastname,
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