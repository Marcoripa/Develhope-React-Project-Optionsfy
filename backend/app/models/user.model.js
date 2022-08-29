module.exports = (sequelize, Sequelize) => {
  return sequelize.define("users", {
    name: { type: Sequelize.STRING },
    surname: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: {
      type: Sequelize.STRING,
    },
    prefix: { type: Sequelize.INTEGER },
    phone: { type: Sequelize.INTEGER },
  });
};