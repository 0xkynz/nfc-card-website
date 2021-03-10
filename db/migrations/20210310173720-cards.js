'use strict';

module.exports = {
  up: async (queryInterface, { DataTypes }) => {
    return queryInterface.createTable('cards', {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cards');
  },
};
