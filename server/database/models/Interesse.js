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
      timestamp: false
    }
  )

  return Interesse
}
