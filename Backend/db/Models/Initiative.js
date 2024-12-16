const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Initiative', {
    id_initiative: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    problem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    opportunity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
