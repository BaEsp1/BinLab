const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Daos', {
    id_Dao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_initiative: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Initiatives',
        key: 'id_initiative',
      },
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
    },
    buy_price: {
      type: DataTypes.FLOAT,
    },
    sell_price: {
      type: DataTypes.FLOAT,
    },
    likes: {
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
  });
};
