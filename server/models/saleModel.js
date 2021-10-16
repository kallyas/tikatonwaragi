const sql = require("./db.js");
const { errorMessage, status, successMessage } = require("../helpers/status");
const Helper = require("../helpers/validations.js");
const moment = require("moment");

  // constructor
const Sale = function(sale) {
  this.saleName= sale.saleName;
  this.category= sale.category;
  this.quantity= sale.quantity;
  this.batchNo= sale.batchNo;
  this.rate= sale.rate;
  this.amount= sale.amount;
  };

  Sale.create = (newsale, result) => {
    const generatesaleID = () => {
      return "P" + moment(new Date()).format("YYYYMMDDHHmmssSS");
    };
    const saleDate=()=>{
      return  moment(new Date()).format("YYYYMMDD");
    }
    newsale.sale_date=saleDate()
    newsale.id = generatesaleID ();
    console.log(newsale.id);
   
  
    const insertsale =
      "INSERT INTO sales (id, sale_name,category,quantity,batch_no,rate,amount,sale_date)  VALUES(?, ?,?, ?, ?, ?, ?,?)";
    const values = [
      newsale.id,
      newsale.saleName,
      newsale.category,
      newsale.quantity,
     newsale.batchNo,
     newsale.rate,
     newsale.amount,
     newsale.sale_date
    ];
  
    sql.query(insertsale, values, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  // sql.query("INSERT INTO sales SET ?", newsale, (err, res) => {
  //   if (err) {
  //     console.log("error: ", err);
  //     result(err, null);
  //     return;
  //   }

    console.log("created sale: ", { id: res.insertId, ...newsale });
    result(null, { id: res.insertId, ...newsale });
  });
};

Sale.findById = (saleId, result) => {
  sql.query(`SELECT * FROM sales WHERE id = ${id}`, (err, res) => {
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

Sale.getAll = result => {
  sql.query("SELECT * FROM sales", (err, res) => {
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
    "UPDATE sales SET email = ?, name = ?, active = ? WHERE id = ?",
    [id, sale_name,category,quantity,batch_no,rate,amount],
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
  sql.query("DELETE FROM sales WHERE id = ?", id, (err, res) => {
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

Sale.removeAll = result => {
  sql.query("DELETE FROM sales", (err, res) => {
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