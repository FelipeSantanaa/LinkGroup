const { getUserByUsername } = require('../services/usuario')
const bcrypt = require('bcryptjs')

module.exports = async (req, res, next) => {
  try {
    // limpeza de cookies
    res.clearCookie('usuario')
    res.clearCookie('admin')

    // busca dados do formulário
    const { username, password } = await req.body

    // verifica se o username e senha correspondem ao cadastrado no banco
    const user = await getUserByUsername(username)

    if (!user) {
      throw Error('Usuário não encontrado!')
    }

    if (!bcrypt.compareSync(password, user.senha)) {
      throw Error('Senha inválida!')
    }

    // definição de cookies
    res.cookie('usuario', user)
    res.cookie('admin', user.admin)

    next()

    return
  } catch (e) {
    console.log(e)
    res.render('login', {
      error: 'Usuário ou senha inválidos!',
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  }
}
