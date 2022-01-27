const express = require('express'),
  router = express.Router(),
  AdminController = require('../controllers/AdminController'),
  authLogin = require('../../middlewares/validateLogin')

router.get('/', authLogin, AdminController.index)
router.get('/appearance', AdminController.appearance)

module.exports = router
