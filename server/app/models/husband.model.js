module.exports = (sequelize, Sequelize) => {
  const Husband = sequelize.define("husband", {
    name: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    wifeID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      refrences: {
        model: 'wife',
        key: 'id'
      }
    }
  });

  return Husband;
};