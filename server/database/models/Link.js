module.exports = (sequelize, DataType) => {
  const Link = sequelize.define(
    'Link',
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: DataType.STRING,
      url: DataType.STRING,
      usuarios_id: DataType.INTEGER,
      criado_em: DataType.DATE,
      modificado_em: DataType.DATE
    },
    {
      tableName: 'links',
      timestamp: false
    }
  )

  return Link
}
