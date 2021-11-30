const express = require('express'), 
router = express.Router(),
AdminController = require('../controllers/AdminController')

router.get('/', AdminController.index);
router.get('/appearance', AdminController.appearance)

module.exports = router;
