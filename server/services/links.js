const { Link } = require('../database/models')

const linkInterface = {
  addLink: async link => {
    return await Link.create({ ...link })
  }
}

module.exports = linkInterface
