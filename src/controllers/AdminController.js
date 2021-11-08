const AdminController = {
    index: (req, res) => {
        res.render('admin')
    },
    appearance: (req, res) => {
        res.render('appearance')
    }
}

module.exports = AdminController