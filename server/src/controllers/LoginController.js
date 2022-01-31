const LoginController = {
  index: async (req, res, next) => {
    let { usuario_id } = await req.cookies

    if (usuario_id) {
      res.redirect('../')
    } else {
      res.render('login', {
        error: null
      })
    }
  },

  auth: async (req, res, next) => {
    return res.redirect('./admin')
  }
}

module.exports = LoginController
