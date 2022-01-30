module.exports = (sequelize, DataType) => {
    const UsuarioInteresse = sequelize.define(
      'UsuarioInteresse',
      {
        interesse_id: {
          type: DataType.INTEGER,
          primaryKey: true,
        },
        usuario_id: {
            type: DataType.INTEGER,
            primaryKey: true,
          },
      },
      {
        tableName: 'usuarios_interesses',
        timestamps: false
      }
    )


    return UsuarioInteresse
  }