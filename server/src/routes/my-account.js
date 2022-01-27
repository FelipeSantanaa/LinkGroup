const express = require('express'),
  router = express.Router(),
  myAccountController = require('../controllers/MyAccountController'),
  authLogin = require('../../middlewares/validateLogin')

router.get('/', authLogin, myAccountController.index)
router.post('/', authLogin, myAccountController.deleteUser)

module.exports = router
