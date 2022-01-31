"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('planos', [{
      plano: 'Free'
    },
    {
      plano: 'Pro'
    },])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('planos', null, {});
  },
};
