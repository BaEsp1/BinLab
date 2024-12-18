const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Operations', {
    id_operation: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_order: {
      type: DataTypes.INTEGER,
      references: {
        model: 'OrderBooks', 
        key: 'id_order',
      },
    },
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id_user',
      },
    },
    type: {
      type: DataTypes.ENUM('buy', 'sell'),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,  
      defaultValue: DataTypes.NOW, 
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
