
  const express = require('express');
  const router = express.Router();
  
    const materials = require("../controllers/materialController");
  
    // Create a new material
    router.post("/materials", materials.create);
  
    // Retrieve all materials
    router.get("/materials", materials.findAll);
  
    // Retrieve a single material with materialId
    router.get("/materials/:materialId", materials.findOne);
  
    // Update a material with materialId
    router.put("/materials/:materialId", materials.update);
  
    // Delete a material with materialId
    router.delete("/materials/:materialId", materials.delete);
  
    // Create a new material
    router.delete("/materials", materials.deleteAll);
  
    module.exports = router