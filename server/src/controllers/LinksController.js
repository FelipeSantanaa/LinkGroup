const { getLinksByUsername } = require('../../services/links')

const LinksController = {
  index: async (req, res) => {
    const { username } = await req.params

    try {
      const links = await getLinksByUsername(username)
      res.render('links', {
        username,
        links
      })
    } catch (e) {
      console.log(e)
      res.status(500).redirect('./error')
    }
  }
}

module.exports = LinksController
