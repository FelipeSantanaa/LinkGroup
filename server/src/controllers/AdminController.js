const {
  setLink,
  getLinksByUserId,
  destroyLink,
  updateLink
} = require('../../services/links')

const { updateUser, getUserById } = require('../../services/usuario')

const { getPlanoById } = require('../../services/plano')

const AdminController = {
  index: async (req, res, next) => {
    let { usuario_id } = await req.cookies
    console.log('Usuário: ', usuario_id)

    try {
      let links = await getLinksByUserId(usuario_id)
      let usuario = await getUserById(usuario_id)
      console.log(usuario)

      res.render('admin', {
        links,
        usuario
      })
    } catch (e) {
      console.log(e)
    }
  },

  appearance: async (req, res, next) => {
    let { usuario_id } = await req.cookies

    try {
      let links = await getLinksByUserId(usuario_id)
      let usuario = await getUserById(usuario_id)

      res.render('appearance', {
        links,
        usuario
      })
    } catch (e) {
      console.log(e)
    }
  },

  account: async (req, res, next) => {
    const { usuario_id } = req.cookies
    const usuario = await getUserById(usuario_id)
    const plano = await getPlanoById(usuario.plano_id)

    res.render('account', {
      usuario,
      plano
    })
  },

  addLink: async (req, res, next) => {
    let { title, url } = await req.body
    let { usuario_id } = await req.cookies

    let link = {
      nome: title,
      url,
      usuario_id,
      criado_em: new Date(),
      modificado_em: new Date()
    }

    try {
      let add = await setLink(link)
      res.redirect('../admin')
    } catch (e) {
      return console.log(e)
    }
  },

  updateLink: async (req, res, next) => {
    let { link_id, title, url } = await req.body
    let modificado_em = new Date()
    try {
      let update = await updateLink(link_id, {
        nome: title,
        url,
        modificado_em
      })
      return res.status(200).redirect('./')
    } catch (e) {
      console.log(e)
    }
  },

  deleteLink: async (req, res, next) => {
    let { link_id } = await req.body

    try {
      let deletion = await destroyLink(link_id)
      console.log(deletion)
      res.redirect('./')
    } catch (e) {
      console.log(e)
    }
  },

  updateDataUser: async (req, res, next) => {
    let { usuario_id } = await req.cookies
    let { name, email } = await req.body
    let modificado_em = new Date()

    let dados = { nome: name, email, modificado_em }

    try {
      let update = await updateUser(usuario_id, dados)
      res.redirect('../account')
    } catch (e) {
      console.log(e)
    }
  },

  updateHeader: async (req, res, next) => {
    let { title_profile, bio } = await req.body
    let { usuario_id } = await req.cookies
    let modificado_em = new Date()

    let dados = {
      titulo_perfil: title_profile,
      bio,
      modificado_em
    }

    try {
      let update = await updateUser(usuario_id, dados)
      res.redirect('../appearance')
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = AdminController
