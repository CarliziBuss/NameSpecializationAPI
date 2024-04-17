const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Name = sequelize.define('Name', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Name;
