const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Daos', {
    id_Dao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    missions: {
      type: DataTypes.STRING,
    },
    priceFluctuation: {
      type: DataTypes.JSON,
    },
    tokenDao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    buy_price: {
      type: DataTypes.FLOAT,
      defaultValue: 1, 
    },
    sell_price: {
      type: DataTypes.FLOAT,
      defaultValue: 1, 
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    join: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    shares: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    addressToken: {
      type: DataTypes.STRING, 
      defaultValue: '0x0', 
    },
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
    },
  });
};
