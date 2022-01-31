'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('usuarios', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER 
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      imagem_perfil: Sequelize.STRING,
      plano_id: Sequelize.STRING,
      admin: Sequelize.INTEGER,
      layout_id: Sequelize.INTEGER,
      criado_em: {
        allowNull: false,
        type: Sequelize.DATE
      },
      modificado_em:  {
        allowNull: false,
        type: Sequelize.DATE
      },
      bio: Sequelize.STRING,
      titulo_perfil: Sequelize.STRING
    });
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('usuarios');
  }
};
