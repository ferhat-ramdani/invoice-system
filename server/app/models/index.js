const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

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
db.husband = require("./husband.model.js")(sequelize, Sequelize);
db.wife = require("./wife.model.js")(sequelize, Sequelize);

db.husband.belongsTo(db.wife, { foreignKey: 'wifeID' });
db.wife.hasOne(db.husband, { foreignKey: 'wifeID' });

module.exports = db;