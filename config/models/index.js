const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(db.Config.DB, dbConfig.User, dbConfig.Password,{
    host: dbConfig.HOST,
    dailect: dbConfig.pool.min,
    aquire: dbConfig.pool.aquire,
    idle: dbConfig.pool.idle,
})

const db = {};

db.Sequelize = Sequlize;
db.sequelize = sequelize;
