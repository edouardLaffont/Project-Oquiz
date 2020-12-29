const { DataTypes, Model } = require('sequelize');
const connection = require('../database');

class Quiz extends Model {}

Quiz.init({
  description: {
    type: DataTypes.TEXT
  },
  title: {
    type: DataTypes.TEXT
  },
}, {
  sequelize: connection,
  tableName: 'quiz',
  timestamps: false
})

module.exports = Quiz;