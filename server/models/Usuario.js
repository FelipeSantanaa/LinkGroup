module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        email: DataType.STRING,
        senha: DataType.STRING,
        nome_usuario: DataType.STRING,
        imagem_perfil: {
            type: DataType.STRING,
            allowNull: true
        },
        plano: DataType.STRING,
        admin: DataType.INTEGER,
        layouts_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        criado_em: DataType.DATE,
        modificado_em: DataType.DATE,
    }, {
        tableName: 'usuarios',
        timestamp: false
    })
}