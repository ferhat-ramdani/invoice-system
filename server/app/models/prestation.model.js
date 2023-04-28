module.exports = (sequelize, Sequelize) => {
    const Prestation = sequelize.define("prestation", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      codeClient: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      statut: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Prestation;
  };