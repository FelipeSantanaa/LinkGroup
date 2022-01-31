const auth = async (req, res, next) => {
  try {
    const { usuario, admin } = await req.cookies
    // if (!usuario) res.render('login')
    if (admin == 0)
      res.render('error', {
        message:
          'Você não tem permissão para acessar essa página. Contate o administrador!',
        markup: '',
        redirect: ''
      })
    if (admin == 1) next()
  } catch (e) {
    console.log(e)
  }

  return
}

module.exports = auth
