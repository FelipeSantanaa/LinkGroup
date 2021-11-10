const express = require ('express'),
router = express.Router(),
myaccountController = require('../controllers/myAccount')

router.get('/',myaccountController.index);

module.exports = router;