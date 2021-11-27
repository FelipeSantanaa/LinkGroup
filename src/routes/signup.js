var express = require('express');
var router = express.Router();
const SignupController = require('../controllers/SignupController');

router.get('/register', SignupController.index)

module.exports = router;