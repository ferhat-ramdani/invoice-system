module.exports = (sequelize, Sequelize) => {
    const CategorieTVA = sequelize.define("categorieTVA", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      taux: {
        type: Sequelize.DECIMAL(3, 2)
      },
      dateDebut: {
        type: Sequelize.DATE
      },
      dateFin: {
        type: Sequelize.DATE
      }
    });
  
    return CategorieTVA;
  };