const express = require('express');
const router = express.Router();
const loginController = require('../controllers/LoginController');

/* GET home page. */
router.get('/', IndexController.index);

router.get('/login', loginController.index)

module.exports = router;
