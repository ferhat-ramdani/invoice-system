module.exports = (sequelize, Sequelize) => {
    const Designation = sequelize.define("designation", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nom: {
        type: Sequelize.STRING
      },
      qte: {
        type: Sequelize.INTEGER
      },
      PUHT: {
        type: Sequelize.DECIMAL(10, 2)
      },
      taux: {
        type: Sequelize.DECIMAL(3, 2)
      },
      produitID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      prestationID: {
        type: Sequelize.INTEGER,
      }
    });
  
    return Designation;
  };