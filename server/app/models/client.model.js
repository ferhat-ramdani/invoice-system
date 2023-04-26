module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
      code: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      nom: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      SIRET: {
        type: Sequelize.STRING
      },
      NAF_APE: {
        type: Sequelize.STRING
      },
      numTVA: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.STRING
      }
    });
  
    return Client;
  };