const { getAllInteresses } = require("../../services/interesse")
const YourInformationController = {
    index: async (req, res) => {
        const interesses = await getAllInteresses()
        res.render('your-information', {
            interesses
        })
    },
    create: async (req, res) => {
        const { interesses} = req.body
        console.log(interesses)
    }
}

module.exports = YourInformationController