var express = require('express');
var router = express.Router();
const YourInformationController = require('../controllers/YourInformationController');

router.get('/your-information', YourInformationController.index)

module.exports = router;