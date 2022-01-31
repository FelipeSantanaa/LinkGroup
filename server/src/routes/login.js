var express = require('express')
var router = express.Router()
const loginController = require('../controllers/LoginController'),
  authMiddleware = require('../../middlewares/auth')

router.get('/', loginController.index)
router.post('/', authMiddleware, loginController.auth)

module.exports = router
