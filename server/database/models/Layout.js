module.exports = (sequelize, DataType) => {
  const Layout = sequelize.define(
    'Layout',
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: DataType.STRING,
      cor_fundo: DataType.STRING,
      cor_fonte: DataType.STRING,
      cor_botoes: DataType.STRING,
      imagem_fundo: DataType.STRING,
      formato_botoes: DataType.STRING,
      id_criador: DataType.INTEGER,
      criado_em: DataType.DATE,
      modificado_em: DataType.DATE
    },
    {
      tableName: 'layouts',
      timestamp: false
    }
  )

  return Layout
}
