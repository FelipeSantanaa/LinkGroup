module.exports = (sequelize, DataType) => {
  const Plano = sequelize.define(
    'Plano',
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      plano: {
        type: DataType.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'plano',
      timestamps: false
    }
  )

  return Plano
}
