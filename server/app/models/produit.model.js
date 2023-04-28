module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      nom: {
        type: Sequelize.STRING
      },
      PUHT: {
        type: Sequelize.DECIMAL(10, 2)
      },
      description: {
        type: Sequelize.STRING
      },
      codeTVA: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
    
    return Produit;
  };