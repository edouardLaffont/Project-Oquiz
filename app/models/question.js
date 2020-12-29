const { DataTypes, Model } = require('sequelize');
const connection = require('../database');

class Question extends Model {}

Question.init({
  anecdote: {
    type: DataTypes.TEXT
  },
  question: {
    type: DataTypes.TEXT
  },
  wiki: {
    type: DataTypes.TEXT
  },
}, {
  sequelize: connection,
  tableName: 'question',
  timestamps: false
})

module.exports = Question;