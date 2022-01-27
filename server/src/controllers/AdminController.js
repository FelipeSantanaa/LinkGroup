const AdminController = {
  index: async (req, res, next) => {
    let { usuario } = req.cookies

    res.render('admin', {
      usuario,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  },
  appearance: (req, res, next) => {
    let { usuario } = req.cookies

    res.render('appearance', {
      usuario,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  },

  account: (req, res, next) => {
    let { usuario, admin } = req.cookies

    res.render('account', {
      usuario
    })
  }
}

module.exports = AdminController
