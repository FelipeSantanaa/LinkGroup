const logoutController = {
  logout: (req, res, next) => {
    res.clearCookie('usuario').clearCookie('admin').redirect('../')
  }
}

module.exports = logoutController
