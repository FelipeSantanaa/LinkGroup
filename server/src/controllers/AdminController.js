const {
  addLink,
  getLinksByUserId,
  deleteLink
} = require('../../services/links')

const { updateUser } = require('../../services/usuario')

const AdminController = {
  index: async (req, res, next) => {
    let { usuario } = await req.cookies
    let links = await getLinksByUserId(usuario.id)

    res.render('admin', {
      links,
      usuario,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  },
  appearance: (req, res, next) => {
    let { usuario } = req.cookies

    res.render('appearance', {
      usuario
    })
  },

  account: (req, res, next) => {
    let { usuario } = req.cookies
    console.log(usuario.nome)

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
      let add = await addLink(link)
      res.redirect('../admin')
    } catch (e) {
      return console.log(e)
    }
  },

  deleteLink: async (req, res, next) => {
    let { link_id } = req.body
    console.log(link_id)

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

    let dados = { nome: name, email }

    try {
      let update = await updateUser(id, dados)
      console.log(update)
      res.redirect('../account')
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = AdminController
