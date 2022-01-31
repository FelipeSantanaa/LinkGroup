const {
  getAllInteresses,
  setUsuarioInteresse
} = require('../../services/interesse')

const { getUserById } = require('../../services/usuario')

const YourInformationController = {
  index: async (req, res) => {
    const { usuario_id } = await req.cookies

    try {
      const usuario = await getUserById(usuario_id)
      const interesses = await getAllInteresses()
      res.render('your-information', {
        interesses,
        usuario
      })
    } catch (e) {
      console.log(e)
    }
  },
  create: async (req, res) => {
    const { interesses } = req.body
    const { usuario_id } = req.cookies
    try {
      for (interesse of interesses) {
        let add = await setUsuarioInteresse({
          usuario_id,
          interesse_id: interesse
        })
      }
      res.redirect('./admin')
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = YourInformationController
