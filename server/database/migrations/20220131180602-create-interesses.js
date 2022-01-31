'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('interesses', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      interesse: Sequelize.STRING
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('interesses');
  }
};
