const { getUsers, destroyUser, updateUser } = require('../../services/usuario')
const { destroyByUserId } = require('../../services/interesse')
const { destroyLinkByUserId } = require('../../services/links')

const DashboardController = {
  index: async (req, res) => {
    usuarioLogado = req.cookies.usuario_id
    try {
      const usuarios = await getUsers()
      return res.render('dashboard', { usuarios, usuarioLogado })
    } catch (e) {
      console.log(e)
    }
  },

  update: async (req, res, next) => {
    const { id } = req.params
    let { name, email, username, title_profile, bio, is_admin } = await req.body

    if (is_admin != 1) is_admin = 0

    console.log(is_admin)

    let dados = {
      nome: name,
      email,
      nome_usuario: username,
      titulo_perfil: title_profile,
      bio,
      admin: is_admin,
      modificado_em: new Date()
    }

    try {
      let update = await updateUser(id, dados)
      res.redirect('../')
    } catch (e) {
      console.log(e)
    }
  },

  destroy: async (req, res, next) => {
    const { id } = await req.params
    // console.log('Id do Usuário: ', id)

    try {
      const deletionLinks = await destroyLinkByUserId(id)
      const deletionInteresses = await destroyByUserId(id)
      const deletion = await destroyUser(id)
      return res.redirect('../')
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = DashboardController
