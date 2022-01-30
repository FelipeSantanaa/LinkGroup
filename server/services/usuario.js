const { Usuario } = require('../database/models')

const usuarioInterface = {}

usuarioInterface.createUser = async user => {
  return await Usuario.create({ ...user })
}

usuarioInterface.getUserByEmail = async email => {
  const user = await Usuario.findOne({
    where: email
  })

  return user
}

usuarioInterface.getUserById = async id => {
  const user = await Usuario.findOne({
    where: id
  })

  return user
}

usuarioInterface.getUserByUsername = async username => {
  const user = await Usuario.findOne({
    where: {
      nome_usuario: username
    }
  })

  return user
}

usuarioInterface.updateUser = async (id, values) => {
  return await Usuario.update(values, {
    where: {
      id
    }
  })
}

usuarioInterface.destroyUser = async user => {
  return await Usuario.destroy({
    where: {
      id: user.id
    }
  })
}

module.exports = usuarioInterface
