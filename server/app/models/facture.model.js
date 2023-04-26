module.exports = (sequelize, Sequelize) => {
    const Facture = sequelize.define("facture", {
      ref: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      codeClient: {
        type: Sequelize.STRING
      },
      nomClient: {
        type: Sequelize.STRING
      },
      adresseClient: {
        type: Sequelize.STRING
      },
      dateFacturation: {
        type: Sequelize.DATE
      },
      dateEcheance: {
        type: Sequelize.DATE
      },
      prestationID: {
        type: Sequelize.INTEGER,
        // references: {
        //     model: 'prestation',
        //     key: 'id'
        // }
      },
      paiementID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //     model: 'paiement',
        //     key: 'id'
        // }
      }
    });
  
    return Facture;
  };