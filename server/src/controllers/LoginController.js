const { getUserById } = require('../../services/usuario')

const LoginController = {
  index: (req, res, next) => {
    let usuarioLogado = req.cookies.usuario
    let usuarioAdmin = req.cookies.admin

    console.log(usuarioAdmin)
    console.log(usuarioLogado)

    if (usuarioLogado || usuarioAdmin) {
      res.render('admin', {
        usuarioLogado: req.cookies.usuario,
        usuarioAdmin: req.cookies.admin
      })
    } else {
      res.render('login')
    }
  },

  auth: async (req, res, next) => {
    const user = await getUserById(req.cookies.usuario)

    res.render('admin', {
      user,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  }
}

module.exports = LoginController
