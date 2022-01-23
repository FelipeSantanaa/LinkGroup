var express = require('express');
var router = express.Router();
var IndexController = require('../controllers/IndexController')

/* GET home page. */
router.get('/', IndexController.index);

module.exports = router;