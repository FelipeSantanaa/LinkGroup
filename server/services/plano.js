const { Plano } = require('../database/models')

const interfacePlano = {
  getPlanoById: async id => {
    return await Plano.findByPk(id)
  },

  getPlanos: async () => {
    return await Plano.findAll()
  }
}

module.exports = interfacePlano
