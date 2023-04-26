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
      produitID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'produit',
        //   key: 'id'
        // }
      },
      prestationID: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'prestation',
        //   key: 'id'
        // }
      }
    });
  
    return Designation;
  };