const { getUserByUsername } = require('../../services/usuario')

const LoginController = {
  index: async (req, res, next) => {
    let user = await req.cookies.usuario

    if (user) {
      res.render('admin', {
        user
      })
    } else {
      res.render('login')
    }
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
