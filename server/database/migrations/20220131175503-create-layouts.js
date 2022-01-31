'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('layouts', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: Sequelize.STRING,
      cor_fundo: Sequelize.STRING,
      cor_fonte: Sequelize.STRING,
      cor_botoes: Sequelize.STRING,
      imagem_fundo: Sequelize.STRING,
      formato_botoes: Sequelize.STRING,
      id_criador: Sequelize.INTEGER,
      criado_em: {
        allowNull: false,
        type: Sequelize.DATE
      },
      modificado_em: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('layouts'); 
  }
};
