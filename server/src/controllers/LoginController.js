const { getUserByUsername } = require('../../services/usuario')

const LoginController = {
  index: async (req, res, next) => {
    res.render('login')
  },

  auth: async (req, res, next) => {
    let user = await getUserByUsername(req.body.username)

    res.render('admin', {
      user,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  }
}

module.exports = LoginController
