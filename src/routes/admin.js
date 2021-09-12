const express = require('express'), 
router = express.Router(),
AdminController = require('../controllers/AdminController')

router.get('/', AdminController.index);

module.exports = router;
