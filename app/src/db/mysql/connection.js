/** @format */
const Sequelize = require("sequelize");
const configDatabase = require("../../config/config")["configDatabase"];

let sequelize = new Sequelize({
  host: configDatabase.host,
  username: configDatabase.username,
  password: configDatabase.password,
  port: configDatabase.port,
  database: configDatabase.database,
  dialect: "mysql",
});

module.exports = sequelize;
