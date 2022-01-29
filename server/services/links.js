const { Link } = require('../database/models')
const { getUserByUsername } = require('../services/usuario')

const linkInterface = {
  setLink: async link => {
    return await Link.create({ ...link })
  },

  getLinksByUserId: async id => {
    return await Link.findAll({
      where: {
        usuario_id: id
      }
    })
  },

  getLinksByUsername: async username => {
    let user = await getUserByUsername(username)
    return await Link.findAll({
      where: {
        usuario_id: user.id
      }
    })
  },

  updateLink: async (id, values) => {
    return await Link.update(values, {
      where: {
        id
      }
    })
  },

  deleteLink: async id => {
    return await Link.destroy({
      where: {
        id
      }
    })
  }
}

module.exports = linkInterface
