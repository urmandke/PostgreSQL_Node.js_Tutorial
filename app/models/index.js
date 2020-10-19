const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.User, dbConfig.Password,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
 
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial.model.js')(sequelize,Sequelize);

module.exports = db;
