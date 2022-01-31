const { getUsers, destroyUser } = require('../../services/usuario')
const { destroyByUserId } = require('../../services/interesse')
const { destroyLinkByUserId } = require('../../services/links')

const DashboardController = {
  index: async (req, res) => {
    try {
      const usuarios = await getUsers()
      return res.render('dashboard', { usuarios })
    } catch (e) {
      console.log(e)
    }
  },

  destroy: async (req, res, next) => {
    const { id } = await req.params
    // console.log('Id do Usuário: ', id)

    try {
      const deletionLinks = await destroyLinkByUserId(id)
      const deletionInteresses = await destroyByUserId(id)
      const deletion = await destroyUser(id)
      return res.redirect('../')
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = DashboardController
