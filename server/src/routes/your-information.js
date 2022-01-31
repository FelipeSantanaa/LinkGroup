var express = require('express');
var router = express.Router();
const YourInformationController = require('../controllers/YourInformationController');

router.get('/', YourInformationController.index)
router.post('/', YourInformationController.create)

module.exports = router;