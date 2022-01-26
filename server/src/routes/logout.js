var express = require('express')
var router = express.Router()
const logoutController = require('../controllers/LogoutController')

router.get('/', logoutController.logout)

module.exports = router
