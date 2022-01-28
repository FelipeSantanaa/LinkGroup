const express = require('express'),
  router = express.Router(),
  AdminController = require('../controllers/AdminController'),
  authLogin = require('../../middlewares/validateLogin')

router.get('/', authLogin, AdminController.index)
router.post('/', authLogin, AdminController.addLink)
router.post('/delete', authLogin, AdminController.deleteLink)
router.get('/appearance', authLogin, AdminController.appearance)
router.get('/account', authLogin, AdminController.account)

module.exports = router
