const { Usuario } = require('../../database/models')
const bcrypt = require('bcryptjs')

const SignupController = {
  index: (req, res) => {
    return res.render('signup')
  },

  createUser: async (req, res, next) => {
    let { name, username, email, password, termo } = await req.body

    let usuario = await Usuario.create({
      nome: name,
      nome_usuario: username,
      email: email,
      senha: bcrypt.hashSync(password, 10),
      admin: 0,
      criado_em: new Date(),
      modificado_em: new Date()
    })

    if (usuario) {
      res.redirect('./login')
    } else {
      res.status(500).send('Ops... Algo deu errado!')
    }
  }
}

module.exports = SignupController
