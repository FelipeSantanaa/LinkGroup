var express = require('express');
var router = express.Router();
const signUpController = require('../controllers/SignupController'),
signUpValidation = require('../validations/signup');

router.get('/', signUpController.index)
router.post('/', signUpValidation, )

module.exports = router;