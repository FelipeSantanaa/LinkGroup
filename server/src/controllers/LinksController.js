const { getLinksByUsername } = require('../../services/links')
const { getUserByUsername } = require('../../services/usuario')

const LinksController = {
  index: async (req, res) => {
    const { username } = await req.params

    try {
      const links = await getLinksByUsername(username)
      const usuario = await getUserByUsername(username)
      res.render('links', {
        usuario,
        links
      })
    } catch (e) {
      console.log(e)
      res.status(500).redirect('./error')
    }
  }
}

module.exports = LinksController
