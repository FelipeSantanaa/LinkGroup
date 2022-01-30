const {
  getAllInteresses,
  setUsuarioInteresse
} = require('../../services/interesse')

const YourInformationController = {
  index: async (req, res) => {
    const { usuario } = await req.cookies
    const interesses = await getAllInteresses()
    res.render('your-information', {
      interesses,
      usuario
    })
  },
  create: async (req, res) => {
    const { interesses } = req.body
    const { id } = req.cookies.usuario
    try {
      for (interesse of interesses) {
        let add = await setUsuarioInteresse({
          usuario_id: id,
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
