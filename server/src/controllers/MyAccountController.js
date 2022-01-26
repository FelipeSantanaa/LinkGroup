const myAccountController = {
  index: (req, res) => {
    let { usuario, admin } = req.cookies

    res.render('my-account', {
      usuario
    })
  }
}

module.exports = myAccountController
