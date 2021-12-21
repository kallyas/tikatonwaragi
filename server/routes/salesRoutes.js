
  const express = require('express');
  const router = express.Router();
  
    const sales = require("../controllers/saleController");
    const {verifyToken} =require('../helpers/verifyAuth');
  
    // Create a new sale
    router.post("/sales", sales.create);
  
    // Retrieve all sales
    router.get("/sales", sales.findAll);
  
    // Retrieve a single sale with saleId
    router.get("/sales/:saleId", sales.findOne);
  
    // Update a sale with saleId
    router.put("/sales/:saleId", sales.update);
  
    // Delete a sale with saleId
    router.delete("/sales/:saleId", sales.delete);
  
    // Create a new sale
    router.delete("/sales", sales.deleteAll);
  
    module.exports = router