const { DataTypes, Model } = require('sequelize');
const connection = require('../database');

class Tag extends Model {}

Tag.init({
  name: {
    type: DataTypes.TEXT
  }
}, {
  sequelize: connection,
  tableName: 'tag',
  timestamps: false
});

module.exports = Tag;