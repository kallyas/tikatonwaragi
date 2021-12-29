
  const express = require('express');
  const router = express.Router();
  
    const products = require("../controllers/productController");
    const {verifyToken} =require('../helpers/verifyAuth');
    
  
    // Create a new product
    router.post("/products", products.create);
  
    // Retrieve all products
    router.get("/products", products.findAll);
  
    // Retrieve a single product with productId
    router.get("/products/:productId", products.findOne);
  
    // Update a product with productId
    router.put("/products/:productId", products.update);
  
    // Delete a product with productId
    router.delete("/products/:productId", products.delete);
  
    // Create a new product
    router.delete("/products", products.deleteAll);
  
    module.exports = router