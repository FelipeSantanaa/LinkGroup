const { Usuario } = require('../database/models')

const usuarioInterface = {}

usuarioInterface.createUser = async user => {
  return await Usuario.create({ ...user })
}

module.exports = usuarioInterface
