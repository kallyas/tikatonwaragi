
  const express = require('express');
  const router = express.Router();
  
    const users = require("../controllers/userController");

    const {verifyToken} =require('../helpers/verifyAuth');

  
    // Create a new user
    router.post("/user/register",  users.create);
  
    // Retrieve all users
    router.get("/users", verifyToken,users.findAll);
  
    // Retrieve a single user with userId
    router.get("/users/:userId", verifyToken, users.findOne);
  
    // Update a user with userId
    router.put("/users/:userId", verifyToken,users.update);
  
    // Delete a user with userId
    router.delete("/users/:userId", verifyToken,users.delete);
  
    // Create a new user
    router.delete("/users", users.deleteAll);
  
  module.exports = router