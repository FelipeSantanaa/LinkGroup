const express = require('express'),
  router = express.Router(),
  AdminController = require('../controllers/AdminController'),
  authLogin = require('../../middlewares/validateLogin')

router.get('/', AdminController.index)
router.post('/', AdminController.addLink)
router.post('/delete', AdminController.deleteLink)
router.get('/appearance', AdminController.appearance)
router.get('/account', AdminController.account)
router.post('/account/update', AdminController.updateDataUser)

module.exports = router
