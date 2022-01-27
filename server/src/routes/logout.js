var express = require('express')
var router = express.Router()
const logoutController = require('../controllers/LogoutController'),
  authLogin = require('../../middlewares/validateLogin')

router.get('/', authLogin, logoutController.logout)

module.exports = router
