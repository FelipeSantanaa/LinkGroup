const { addLink, getLinksByUserId } = require('../../services/links')

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
      usuario,
      usuarioLogado: req.cookies.usuario,
      usuarioAdmin: req.cookies.admin
    })
  },

  account: (req, res, next) => {
    let { usuario, admin } = req.cookies

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
      if (add) {
        res.redirect('./admin')
      }
    } catch (e) {
      return console.log(e)
    }
  }
}

module.exports = AdminController
