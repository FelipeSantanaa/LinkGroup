const login = async (req, res, next) => {
  let { usuario, admin } = req.cookies

  if (!usuario) res.redirect('../login')

  return

  next()

  return
}

module.exports = login
