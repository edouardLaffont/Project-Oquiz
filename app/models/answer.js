const { DataTypes, Model } = require('sequelize');
const connection = require('../database');

class Answer extends Model {}

Answer.init({
  description: {
    type: DataTypes.TEXT
  }
}, {
  sequelize: connection,
  tableName: 'answer',
  timestamps: false
});

module.exports = Answer;