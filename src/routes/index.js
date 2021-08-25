const express = require('express');
const router = express.Router();
const loginController = require('../controllers/LoginController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', loginController.index)

module.exports = router;
