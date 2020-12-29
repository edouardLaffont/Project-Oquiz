const { DataTypes, Model } = require('sequelize');
const connection = require('../database');

class Level extends Model {}
Level.init({
  name: {
    type: DataTypes.STRING
  }
}, {
  sequelize: connection,
  tableName: 'level',
  timestamps: false
});

module.exports = Level;
