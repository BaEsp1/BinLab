const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Shares', {
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    id_Dao: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Daos',
        key: 'id_Dao',
      },
    },
    tag: {
      type: DataTypes.STRING,
    },
  });
};
