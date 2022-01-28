const { Link } = require('../database/models')

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

  deleteLink: async id => {
    return await Link.destroy({
      where: {
        id
      }
    })
  }
}

module.exports = linkInterface
