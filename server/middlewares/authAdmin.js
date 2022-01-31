const { getUserById } = require('../services/usuario')

const auth = async (req, res, next) => {
  try {
    const { usuario_id } = await req.cookies
    const usuario = await getUserById(usuario_id)
    if (usuario.admin == 0)
      res.render('error', {
        message:
          'Você não tem permissão para acessar essa página. Contate o administrador!',
        markup: '',
        redirect: ''
      })
    if (usuario.admin == 1) next()
  } catch (e) {
    console.log(e)
  }

  return
}

module.exports = auth
