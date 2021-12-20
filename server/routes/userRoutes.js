
  const express = require('express');
  const router = express.Router();
  
    const users = require("../controllers/userController");

    const validations =require('../helpers/validations')
  
    // Create a new user
    router.post("/users", users.create);
  
    // Retrieve all users
    router.get("/users", users.findAll);
  
    // Retrieve a single user with userId
    router.get("/users/:userId", users.findOne);
  
    // Update a user with userId
    router.put("/users/:userId", users.update);
  
    // Delete a user with userId
    router.delete("/users/:userId", users.delete);
  
    // Create a new user
    router.delete("/users", users.deleteAll);
  
  module.exports = router