const LoginController = {
  index: async (req, res, next) => {
    let { usuario } = await req.cookies

    if (usuario) {
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
