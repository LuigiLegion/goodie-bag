const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  // define your model here!
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://static.timesofisrael.com/www/uploads/2013/12/krembo-300x254.jpg',
  },
});

module.exports = Candy;
