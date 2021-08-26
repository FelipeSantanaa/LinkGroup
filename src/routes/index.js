const express = require('express');
const router = express.Router();
const IndexController = require('../controllers/IndexController')

/* GET home page. */
router.get('/', IndexController.index);



module.exports = router;
