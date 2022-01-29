const { Link } = require('../database/models')
const { getUserByUsername } = require('../services/usuario')

const linkInterface = {
  addLink: async link => {
    return await Link.create({ ...link })
  },

  getLinksByUserId: async id => {
    let links = await Link.findAll({
      where: {
        usuario_id: id
      }
    })
    console.log(links)
    return links
  },

  getLinksByUsername: async username => {
    let user = await getUserByUsername(username)
    let links = await Link.findAll({
      where: {
        usuario_id: user.id
      }
    })

    return links
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
