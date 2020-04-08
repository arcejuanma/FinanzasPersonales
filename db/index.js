const {Sequelize}  = require("sequelize");

const db = new Sequelize('finapp', 'postgres', 'Pipi1998', {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = db;