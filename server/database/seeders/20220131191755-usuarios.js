'use strict';

const bcrypt = require('bcryptjs')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [{
      nome: 'Administrator',
      email: 'linkgroup.admin@linkgroup.com',
      senha: `${bcrypt.hashSync('admin', 10)}`,
      nome_usuario: 'admin',
      imagem_perfil: null,
      plano_id: 2,
      admin: 1,
      layout_id: null,
      criado_em: new Date(),
      modificado_em: new Date(),
      bio: null,
      titulo_perfil: null
    },
    {
      nome: 'Altair',
      email: 'altair@linkgroup.com',
      senha: `${bcrypt.hashSync('123', 10)}`,
      nome_usuario: 'altair',
      imagem_perfil: null,
      plano_id: 1,
      admin: 0,
      layout_id: null,
      criado_em: new Date(),
      modificado_em: new Date(),
      bio: null,
      titulo_perfil: null
    },
    {
      nome: 'Lucas',
      email: 'lucas@linkgroup.com',
      senha: `${bcrypt.hashSync('123', 10)}`,
      nome_usuario: 'lucas',
      imagem_perfil: null,
      plano_id: 1,
      admin: 0,
      layout_id: null,
      criado_em: new Date(),
      modificado_em: new Date(),
      bio: null,
      titulo_perfil: null
    },
    {
      nome: 'Felipe',
      email: 'felipe@linkgroup.com',
      senha: `${bcrypt.hashSync('123', 10)}`,
      nome_usuario: 'felipe',
      imagem_perfil: null,
      plano_id: 1,
      admin: 0,
      layout_id: null,
      criado_em: new Date(),
      modificado_em: new Date(),
      bio: null,
      titulo_perfil: null
    },
    {
      nome: 'Robert',
      email: 'robert@linkgroup.com',
      senha: `${bcrypt.hashSync('123', 10)}`,
      nome_usuario: 'robert',
      imagem_perfil: null,
      plano_id: 1,
      admin: 0,
      layout_id: null,
      criado_em: new Date(),
      modificado_em: new Date(),
      bio: null,
      titulo_perfil: null
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
