var express = require('express');
var router = express.Router();
const LoginController = require('../controllers/LoginController');

router.get('/', LoginController.index)

module.exports = router;
