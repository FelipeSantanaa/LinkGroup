var express = require('express')
var router = express.Router()
const errorController = require('../controllers/ErrorController')

router.get('/', errorController.index)

module.exports = router
