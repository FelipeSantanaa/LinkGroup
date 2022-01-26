const login = async (req, res, next) => {
  let usuarioLogado = req.cookies.usuario

  if (!usuarioLogado) {
    res.render('login', {
      erro: 'Faça login para visualizar a página!',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })

    return
  }

  next()

  return
}

module.exports = login
