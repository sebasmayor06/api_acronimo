require('dotenv').config();
const acronimosModel = require ('./models/acronimos')
const {
    DATABASE_URL
} = process.env


const {Sequelize} = require('sequelize');


const database = new Sequelize(`${DATABASE_URL}`,{logging:false});

acronimosModel(database)


module.exports = {database, ...database.models}