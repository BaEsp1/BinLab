const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'mod',
    validate: {
      isIn: [['admin', 'mod']],
    },
  },
  state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
})}
