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
    createdAt: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
