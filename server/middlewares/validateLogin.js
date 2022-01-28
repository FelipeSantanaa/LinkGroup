const login = async (req, res, next) => {
  let { usuario, admin } = req.cookies

  if (!usuario) {
    res.render('login', {
      error: 'Faça login para visualizar a página!',
      usuarioLogado: usuario,
      usuarioAdmin: admin
    })

    return
  }

  next()

  return
}

module.exports = login
