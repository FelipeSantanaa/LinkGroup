const {
  setLink,
  getLinksByUserId,
  deleteLink,
  updateLink
} = require('../../services/links')

const { updateUser, getUserById } = require('../../services/usuario')

const AdminController = {
  index: async (req, res, next) => {
    let { id } = await req.cookies.usuario

    try {
      let links = await getLinksByUserId(id)
      let usuario = await getUserById(id)

      res.render('admin', {
        links,
        usuario
      })
    } catch (e) {
      console.log(e)
    }
  },

  appearance: async (req, res, next) => {
    let { id } = await req.cookies.usuario

    try {
      let links = await getLinksByUserId(id)
      let usuario = await getUserById(id)

      res.render('appearance', {
        links,
        usuario
      })
    } catch (e) {
      console.log(e)
    }
  },

  account: async (req, res, next) => {
    const { id } = req.cookies.usuario
    const usuario = await getUserById(id)

    res.render('account', {
      usuario
    })
  },

  addLink: async (req, res, next) => {
    let { title, url } = await req.body
    let { usuario } = await req.cookies

    let link = {
      nome: title,
      url,
      usuario_id: usuario.id,
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

    console.log(title)
    console.log(url)
    console.log(link_id)
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
      let deletion = await deleteLink(link_id)
      console.log(deletion)
      res.redirect('./')
    } catch (e) {
      console.log(e)
    }
  },

  updateDataUser: async (req, res, next) => {
    let { id } = await req.cookies.usuario
    let { name, email } = await req.body
    let modificado_em = new Date()

    let dados = { nome: name, email, modificado_em }

    try {
      let update = await updateUser(id, dados)
      res.redirect('../account')
    } catch (e) {
      console.log(e)
    }
  },

  updateHeader: async (req, res, next) => {
    let { title_profile, bio } = await req.body
    let { id } = await req.cookies.usuario
    let modificado_em = new Date()

    let dados = {
      titulo_perfil: title_profile,
      bio,
      modificado_em
    }

    try {
      let update = await updateUser(id, dados)
      res.redirect('../appearance')
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = AdminController
