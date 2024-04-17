const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Specialization = sequelize.define('Specialization', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Specialization;
