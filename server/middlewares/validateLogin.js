const login = async (req, res, next) => {
  try {
    let { usuario, admin } = await req.cookies
    next()
  } catch (e) {
    console.log(e)
    res.redirect('../login')
  }
  return
}

module.exports = login
