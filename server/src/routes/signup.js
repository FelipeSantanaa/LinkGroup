var express = require('express')
var router = express.Router()
const signUpController = require('../controllers/SignUpController')

router.get('/', signUpController.index)
router.post('/', signUpController.addUser)

module.exports = router
