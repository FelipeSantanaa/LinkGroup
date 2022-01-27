const { getUserByUsername } = require('../../services/usuario')

const LoginController = {
  index: async (req, res, next) => {
    let { usuario } = await req.cookies

    if (usuario) {
      res
        .render('admin', {
          usuario
        })
        .res.redirect('./admin')
    } else {
      res.render('login', {
        error: null
      })
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
