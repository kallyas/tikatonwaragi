const sql = require("./db.js");
const { errorMessage, status, successMessage } = require("../helpers/status");
const Helper = require("../helpers/validations.js");
const moment = require("moment");

  // constructor
const Product = function(product) {
  this.productName= product.productName;
  this.category= product.category;
  this.quantity= product.quantity;
  this.batchNo= product.batchNo;
  this.rate= product.rate;
  this.amount= product.amount;
  };

  Product.create = (newproduct, result) => {
    const generateProductID = () => {
      return "P" + moment(new Date()).format("YYYYMMDDHHmmssSS");
    };
  
    newproduct.id = generateProductID ();
    console.log(newproduct.id);
   
  
    const insertProduct =
      "INSERT INTO products (id, product_name,category,quantity,batch_no,rate,amount)  VALUES(?, ?, ?, ?, ?, ?,?)";
    const values = [
      newproduct.id,
      newproduct.productName,
      newproduct.category,
      newproduct.quantity,
     newproduct.batchNo,
     newproduct.rate,
     newproduct.amount,
    ];
  
    sql.query(insertProduct, values, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  // sql.query("INSERT INTO products SET ?", newproduct, (err, res) => {
  //   if (err) {
  //     console.log("error: ", err);
  //     result(err, null);
  //     return;
  //   }

    console.log("created product: ", { id: res.insertId, ...newproduct });
    result(null, { id: res.insertId, ...newproduct });
  });
};

Product.findById = (productId, result) => {
  sql.query(`SELECT * FROM products WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found product with the id
    result({ kind: "not_found" }, null);
  });
};

Product.getAll = result => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Product.updateById = (id, product, result) => {
  sql.query(
    "UPDATE products SET email = ?, name = ?, active = ? WHERE id = ?",
    [id, product_name,category,quantity,batch_no,rate,amount],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found product with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id, ...product });
      result(null, { id: id, ...product });
    }
  );
};

Product.remove = (id, result) => {
  sql.query("DELETE FROM products WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found product with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted product with id: ", id);
    result(null, res);
  });
};

Product.removeAll = result => {
  sql.query("DELETE FROM products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} products`);
    result(null, res);
  });
};

module.exports = Product;