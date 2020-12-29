const { DataTypes, Model } = require('sequelize');
const connection = require('../database');

class User extends Model {
  getFullName(){
    return `${this.firstname} ${this.lastname}`;
  }
}

User.init({
  firstname: {
    type: DataTypes.TEXT
  },
  lastname: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.TEXT
  },
  password: {
    type: DataTypes.TEXT
  },
  role: {
    type: DataTypes.TEXT
  }
}, {
  sequelize: connection,
  tableName: 'user',
  timestamps: false
});

module.exports = User;