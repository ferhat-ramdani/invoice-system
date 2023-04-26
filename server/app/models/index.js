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
db.categorieTVA = require("./categorie-tva.model.js")(sequelize, Sequelize);
db.produit = require("./produit.model.js")(sequelize, Sequelize);

db.produit.belongsTo(db.categorieTVA, { foreignKey: 'codeTVA' });
db.categorieTVA.hasMany(db.produit, { foreignKey: 'codeTVA' });

db.client = require("./client.model.js")(sequelize, Sequelize);
db.prestation = require("./prestation.model.js")(sequelize, Sequelize);

db.prestation.belongsTo(db.client, { foreignKey: 'codeClient'});
db.client.hasMany(db.prestation, { foreignKey: 'codeClient' });

db.designation = require("./designation.model.js")(sequelize, Sequelize);

db.designation.belongsTo(db.produit, { foreignKey: 'produitID'});
db.produit.hasMany(db.designation, { foreignKey: 'produitID' });

db.designation.belongsTo(db.prestation, { foreignKey: 'prestationID'});
db.prestation.hasMany(db.designation, { foreignKey: 'prestationID' });

db.paiement = require("./paiement.model.js")(sequelize, Sequelize);
db.facture = require("./facture.model.js")(sequelize, Sequelize);

db.facture.belongsTo(db.paiement, { foreignKey: 'paiementID'});
db.paiement.hasMany(db.facture, { foreignKey: 'paiementID' });

db.facture.belongsTo(db.prestation, { foreignKey: 'prestationID'});
db.prestation.hasOne(db.facture, { foreignKey: 'prestationID' });

module.exports = db;