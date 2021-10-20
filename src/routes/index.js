var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController')
const SignupController = require('../controllers/SignupController');
const YourInformationController = require('../controllers/YourInformationController');

/* GET home page. */
router.get('/', IndexController.index);
router.get('/register', SignupController.index)
router.get('/your-information', YourInformationController.index)

module.exports = router;
