const env = require("./config.env");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.rain = require("../models/model.rain")(sequelize, Sequelize);
db.water = require("../models/model.water")(sequelize, Sequelize);

module.exports = db;
