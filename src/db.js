require('dotenv').config();
const acronimosModel = require('./models/acronimos');
const { Sequelize } = require('sequelize');

const { DATABASE_URL2 } = process.env;

const database = new Sequelize(DATABASE_URL2, { logging: false });

acronimosModel(database);

module.exports = { database, ...database.models };

