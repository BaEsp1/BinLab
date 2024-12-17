const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('UserStats', {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id_user',
      },
    },
    createdInitiatives: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    sharedInitiatives: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    joinedInitiatives: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    solvedMissions: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    validatedMissions: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    initiativeLikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    generatedTokens: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    tags: {
      type: DataTypes.JSON,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
