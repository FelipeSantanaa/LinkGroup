var express = require('express');
var router = express.Router();
const linksController = require('../controllers/LinksController');

router.get('/', linksController.index)

module.exports = router;


