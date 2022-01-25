var express = require('express')
var router = express.Router()
const signUpController = require('../controllers/SignupController')

router.get('/', signUpController.index)
router.post('/', signUpController.createUser)

module.exports = router
