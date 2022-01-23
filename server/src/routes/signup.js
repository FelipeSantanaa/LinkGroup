var express = require('express');
var router = express.Router();
const SignupController = require('../controllers/SignupController');

router.get('/', SignupController.index)

module.exports = router;