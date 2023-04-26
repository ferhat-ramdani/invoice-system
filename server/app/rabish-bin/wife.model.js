module.exports = (sequelize, Sequelize) => {
    const Wife = sequelize.define("wife", {
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      fruit: {
        type: Sequelize.STRING
      },
    });
  
    return Wife;
  };