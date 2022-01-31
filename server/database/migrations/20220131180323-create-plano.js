'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('planos', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plano: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('planos');
  }
};
