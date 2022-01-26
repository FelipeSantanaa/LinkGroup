const AdminController = {
  index: async (req, res, next) => {
    res.render('admin', {
      user: req.cookies.usuario
    })
  },
  appearance: (req, res, next) => {
    res.render('appearance', {
      user: req.cookies.usuario
    })
  }
}

module.exports = AdminController
