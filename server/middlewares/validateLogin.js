const login = async (req, res, next) => {
  try {
    let { usuario } = await req.cookies
    if (usuario) next()
  } catch (e) {
    console.log(e)
    res.render('error', {
      message:
        'Parece que você não está logado. Para acessar essa página, faça o',
      markup: 'login',
      redirect: 'login'
    })
  }
  return
}

module.exports = login
