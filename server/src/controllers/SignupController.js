const { createUser } = require('../../services/usuario')
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

    let creation = await createUser(user)

    if (creation) {
      return res.render('./login', {
        user
      })
    } else {
      return res.status(500).send('Ops... Algo deu errado!')
    }
  }
}

module.exports = SignUpController
