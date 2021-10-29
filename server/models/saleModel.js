const sql = require("./db.js");
const { errorMessage, status, successMessage } = require("../helpers/status");
const Helper = require("../helpers/validations.js");
const moment = require("moment");

// constructor
const Sale = function (sale) {
  this.product_name = sale.product_name;
  this.category = sale.category;
  this.quantity = sale.quantity;

  this.unit_price = sale.unit_price;
  this.amount = sale.amount;
  this.sale_date = sale.sale_date;
  this.payment_mode = sale.payment_mode;
};
// Create model for sales
Sale.create = (newsale, result) => {
  const generatesaleID = () => {
    return "P" + moment(new Date()).format("YYYYMMDDHHmmssSS");
  };
  const generateCustomerID = () => {
    return "C" + moment(new Date()).format("YYYYMMDDHHmmssSS");
  };
  const saleDate = () => {
    return moment(new Date()).format("YYYYMMDD");
  };
  newsale.sale_date = saleDate();
  newsale.id = generatesaleID();
  newsale.customer_id=generateCustomerID()
  console.log(newsale.id,newsale.customer_id);

  // Inserting into tables sales and customer tables
  const insertsale =
    "INSERT INTO tika_sales (id, product_name,category,quantity,unit_price,amount,sale_date)  VALUES(?, ?,?, ?, ?, ?, ?)";
  const insertCustomer =
    "INSERT INTO customers (customer_id, customer_name, location)  VALUES(?, ?,?)";
  const values = [
    newsale.id,
    newsale.customer_id,
    newsale.product_name,
    newsale.category,
    newsale.quantity,
    newsale.unit_price,
    newsale.amount,
    newsale.sale_date,
    newsale.payment_mode,
    newsale.customer_name,
    newsale.customer_location,
  ];
  // const insertCustomer = "INSERT INTO customers (id, customer_name, location)  VALUES(?, ?,?)";

  sql.query(insertsale, insertCustomer, values, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    //  print result in terminal
    console.log("created sale: ", { id: res.insertId, ...newsale });
    result(null, { id: res.insertId, ...newsale });
  });
};
// find one item
Sale.findById = (id, result) => {
  sql.query(`SELECT * FROM tika_sales WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found sale: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found sale with the id
    result({ kind: "not_found" }, null);
  });
};

Sale.getAll = (result) => {
  sql.query("SELECT * FROM tika_sales,customers", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("sales: ", res);
    result(null, res);
  });
};

Sale.updateById = (id, sale, result) => {
  sql.query(
    "UPDATE tika_sales SET product_name = ?, category = ?, quantity = ? sale_date = ?  unit_price= ? amount= ? payment_mode=? WHERE id = ?",
    [
      id,
      product_name,
      category,
      quantity,
      unit_price,
      amount,
      sale_date,
      payment_mode,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found sale with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated sale: ", { id: id, ...sale });
      result(null, { id: id, ...sale });
    }
  );
};

Sale.remove = (id, result) => {
  sql.query("DELETE FROM tika_sales WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found sale with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted sale with id: ", id);
    result(null, res);
  });
};

Sale.removeAll = (result) => {
  sql.query("DELETE FROM tika_sales", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} sales`);
    result(null, res);
  });
};

module.exports = Sale;
