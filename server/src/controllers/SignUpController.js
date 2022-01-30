const { createUser, getUserByUsername } = require('../../services/usuario')
const bcrypt = require('bcryptjs')

const SignUpController = {
  index: (req, res) => {
    return res.render('signup')
  },

  addUser: async (req, res, next) => {
    let user = {}

    user.nome = req.body.name
    user.nome_usuario = req.body.username
    user.email = req.body.email
    user.senha = bcrypt.hashSync(req.body.password, 10)
    user.admin = 0
    user.criado_em = new Date()
    user.modificado_em = new Date()

    try {
      let creation = await createUser(user)
      if (creation) {
        // limpa os cookies
        res.clearCookie('usuario')
        res.clearCookie('admin')

        const usuario = await getUserByUsername(user.nome_usuario)

        if (usuario) {
          // definição de cookies
          res.cookie('usuario', usuario)
          res.cookie('admin', usuario.admin)

          res.redirect('./your-information')
        }
      }
    } catch (e) {
      return res.status(500).send('Ops... Algo deu errado!')
    }
  }
}

module.exports = SignUpController
