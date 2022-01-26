'use strict'

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      imagem_perfil: DataTypes.STRING,
      plano_id: DataTypes.STRING,
      admin: DataTypes.INTEGER,
      layout_id: DataTypes.INTEGER,
      criado_em: DataTypes.DATE,
      modificado_em: DataTypes.DATE,
      bio: DataTypes.STRING,
      titulo_perfil: DataTypes.STRING
    },
    { tableName: 'usuarios', timestamps: false }
  )

  return Usuario
}
