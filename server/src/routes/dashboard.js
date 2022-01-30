var express = require('express');
var router = express.Router();
const DashboardController = require('../controllers/DashboardController');

router.get('/', DashboardController.index)
// router.post('/', DashboardController.create)

module.exports = router;