module.exports = (sequelize, DataType) => {
  const Link = sequelize.define(
    'Link',
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
      url: {
        type: DataType.STRING,
        allowNull: false
      },
      usuario_id: {
        type: DataType.INTEGER,
        allowNull: false
      },
      criado_em: {
        type: DataType.DATE,
        allowNull: false
      },
      modificado_em: {
        type: DataType.DATE,
        allowNull: false
      }
    },
    {
      tableName: 'links',
      timestamps: false
    }
  )

  return Link
}
