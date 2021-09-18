const Material = require("../models/materialModel");

// Create and Save a new material
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a material
      const material = new Material({
        item: req.body.item,
        category: req.body.category,
        quantity: req.body.quantity,
        unitPrice: req.body.unitPrice,
        amount: req.body.amount,
        invoiceNumber :req.body.invoiceNumber,
        supplier_id:req.body.supplier_id
      });
    
      // Save material in the database
      Material.create(material, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the material."
          });
        else res.send(data);
    });
};

// Retrieve all materials from the database.
exports.findAll = (req, res) => {
    Material.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving materials."
          });
        else res.send(data);
      });
};

// Find a single material with a materialId
exports.findOne = (req, res) => {
    Material.findById(req.params.materialId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found material with id ${req.params.materialId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving material with id " + req.params.materialId
            });
          }
        } else res.send(data);
      });
};

// Update a material identified by the materialId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Material.updateById(
    req.params.materialId,
    new material(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found material with id ${req.params.materialId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating material with id " + req.params.materialId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a material with the specified materialId in the request
exports.delete = (req, res) => {
    Material.remove(req.params.materialId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found material with id ${req.params.materialId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete material with id " + req.params.materialId
            });
          }
        } else res.send({ message: `material was deleted successfully!` });
      });
};

// Delete all materials from the database.
exports.deleteAll = (req, res) => {
    Material.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all materials."
          });
        else res.send({ message: `All materials were deleted successfully!` });
      });
};