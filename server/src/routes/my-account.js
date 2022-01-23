const express = require ('express'),
router = express.Router(),
myAccountController = require('../controllers/my-account')

router.get('/', myAccountController.index);

module.exports = router;