module.exports = (sequelize, Sequelize) => {
    const Paiement = sequelize.define("paiement", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      domiciliation: {
        type: Sequelize.STRING
      },
      proprietaire: {
        type: Sequelize.STRING
      },
      IBAN: {
        type: Sequelize.STRING
      },
      BIC_SWIFT: {
        type: Sequelize.STRING
      }
    });
  
    return Paiement;
  };