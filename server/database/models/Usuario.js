'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes, Model) => {
  class Usuario extends Model {
    static associate(models) {}
  }

  Usuario.init(
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataType.STRING,
        allowNull: false
      },
      email: {
        type: DataType.STRING,
        allowNull: false
      },
      senha: {
        type: DataType.STRING,
        allowNull: false
      },
      nome_usuario: {
        type: DataType.STRING,
        allowNull: false
      },
      imagem_perfil: DataType.STRING,
      plano_id: DataType.STRING,
      admin: DataType.INTEGER,
      layout_id: DataType.INTEGER,
      criado_em: DataType.DATE,
      modificado_em: DataType.DATE
    },
    { sequelize, timestamps: true, modelName: 'Usuario' }
  )
}
