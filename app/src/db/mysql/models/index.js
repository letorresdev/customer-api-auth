/** @format */

"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../connection");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const db = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync();
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
