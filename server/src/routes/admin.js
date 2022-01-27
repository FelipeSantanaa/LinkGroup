const express = require('express'),
  router = express.Router(),
  AdminController = require('../controllers/AdminController'),
  authMiddleware = require('../../middlewares/auth')

router.get('/', AdminController.index)
router.get('/appearance', AdminController.appearance)

module.exports = router
