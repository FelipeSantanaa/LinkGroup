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

  Interesse.associate = function (models) {
    Interesse.belongsToMany(models.Usuario, {
      through: models.UsuarioInteresse,
      foreignKey: 'interesse_id'
    })
  }

  return Interesse
}
