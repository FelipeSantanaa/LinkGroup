const express = require('express'),
  router = express.Router(),
  myAccountController = require('../controllers/MyAccountController')

router.get('/', myAccountController.index)

module.exports = router
