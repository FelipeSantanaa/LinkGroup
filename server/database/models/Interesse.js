module.exports = (sequelize, DataType) => {
  const Interesse = sequelize.define(
    'Interesse',
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      interesse: DataType.STRING
    },
    {
      tableName: 'interesses',
      timestamps: false
    }
  )

  // Interesse.associate(models){
  //   Interesse.belongsTo(models.Usuario, {
  //     foreignKey: "usuario_id",
  //     through: models.UsuarioInteresse
  //   })
  // }

  return Interesse
}
