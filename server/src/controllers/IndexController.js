const IndexController = {
  index: async (req, res, next) => {
    let { admin, usuario } = req.cookies

    if (usuario || admin) {
      res.render('index-authenticated', {
        usuarioLogado: usuario,
        usuarioAdmin: admin
      })
    } else {
      res.render('index')
    }
  }
}

module.exports = IndexController
