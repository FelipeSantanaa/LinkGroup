const logoutController = {
  logout: (req, res, next) => {
    res.clearCookie('usuario_id').clearCookie('admin').redirect('../')
  }
}

module.exports = logoutController
