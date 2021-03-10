'use strict';

module.exports = {
  up: async (queryInterface, { DataTypes }) => {
    return queryInterface.createTable('users', {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      displayName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      aboutMe: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      tiktok: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      facebook: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      twitter: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      instagram: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cardID: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
