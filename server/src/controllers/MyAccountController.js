const { destroyUser } = require('../../services/usuario')

const myAccountController = {
  index: (req, res, next) => {
    let { usuario, admin } = req.cookies

    res.render('my-account', {
      usuario
    })
  },

  deleteUser: async (req, res, next) => {}
}

module.exports = myAccountController
