const sql = require("./db.js");


  // constructor
const Material = function(material) {
  this.materialName = material.materialName;
  this.quantity= material.quantity
  this.unitCost= material.unitCost;
  this.rate= material.rate;
this.total= material.total;
  this.date=material.date;
  this.supplierId=material.supplierId;

  };

  Material.create = (newmaterial, result) => {
  sql.query("INSERT INTO materials SET ?", newmaterial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created material: ", { id: res.insertId, ...newmaterial });
    result(null, { id: res.insertId, ...newmaterial });
  });
};

Material.findById = (materialId, result) => {
  sql.query(`SELECT * FROM materials WHERE id = ${materialId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found material: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found material with the id
    result({ kind: "not_found" }, null);
  });
};

Material.getAll = result => {
  sql.query("SELECT * FROM materials", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("materials: ", res);
    result(null, res);
  });
};

Material.updateById = (id, material, result) => {
  sql.query(
    "UPDATE materials SET email = ?, name = ?, active = ? WHERE id = ?",
    [material.email, material.name, material.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found material with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated material: ", { id: id, ...material });
      result(null, { id: id, ...material });
    }
  );
};

Material.remove = (id, result) => {
  sql.query("DELETE FROM materials WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found material with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted material with id: ", id);
    result(null, res);
  });
};

Material.removeAll = result => {
  sql.query("DELETE FROM materials", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} materials`);
    result(null, res);
  });
};

module.exports = Material;