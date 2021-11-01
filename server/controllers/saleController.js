const Sale = require("../models/saleModel");

// Create and Save a new sale
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      // Create a sale
      const sale = new Sale({
        
        product_name: req.body.product_name,
        category: req.body.category,
        quantity: req.body.quantity,       
        unit_price :req.body.unit_price,
        amount:req.body.amount,
        sale_date: req.body.sale_date,
        payment_mode:req.body.payment_mode,
      });
    
      // Save sale in the database
      Sale.create(sale, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the sale."
          });
        else res.send(data);
    });
};

// Retrieve all sales from the database.
exports.findAll = (req, res) => {
    Sale.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving sales."
          });
        else res.send(data);
      });
};

// Find a single sale with a saleId
exports.findOne = (req, res) => {
    Sale.findById(req.params.saleId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found sale with id ${req.params.saleId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving sale with id " + req.params.saleId
            });
          }
        } else res.send(data);
      });
};

// Update a sale identified by the saleId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Sale.updateById(
    req.params.saleId,
    new sale(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found sale with id ${req.params.saleId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating sale with id " + req.params.saleId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a sale with the specified saleId in the request
exports.delete = (req, res) => {
    Sale.remove(req.params.saleId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found sale with id ${req.params.saleId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete sale with id " + req.params.saleId
            });
          }
        } else res.send({ message: `sale was deleted successfully!` });
      });
};

// Delete all sales from the database.
exports.deleteAll = (req, res) => {
    Sale.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all sales."
          });
        else res.send({ message: `All sales were deleted successfully!` });
      });
};