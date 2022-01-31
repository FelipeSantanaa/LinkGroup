const IndexController = {
  index: async (req, res, next) => {
    let { admin, usuario_id } = req.cookies

    if (usuario_id || admin) {
      res.render('index-authenticated')
    } else {
      res.render('index')
    }
  }
}

module.exports = IndexController
