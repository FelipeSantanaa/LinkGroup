const { getAllInteresses } = require("../../services/interesse")
const YourInformationController = {
    index: async (req, res) => {
        const { usuario } = await req.cookies
        const interesses = await getAllInteresses()
        res.render('your-information', {
            interesses,
            usuario_nome: usuario.nome
        })
    },
    create: async (req, res) => {
        const { interesses} = req.body
        console.log(interesses)
    }
}

module.exports = YourInformationController