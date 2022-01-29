var express = require('express')
var router = express.Router()
const IndexController = require('../controllers/IndexController')
const LinksController = require('../controllers/LinksController')

router.get('/', IndexController.index)
router.get('/:username', LinksController.index)

module.exports = router
