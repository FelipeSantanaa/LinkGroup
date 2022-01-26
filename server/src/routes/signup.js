var express = require('express')
var router = express.Router()
const signUpController = require('../controllers/SignUpController'),
  validateMiddleware = require('../../middlewares/validateFormCadastro')

router.get('/', signUpController.index)
router.post('/', signUpController.addUser)

module.exports = router
