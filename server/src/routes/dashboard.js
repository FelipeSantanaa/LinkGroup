var express = require('express')
var router = express.Router()
const DashboardController = require('../controllers/DashboardController')

router.get('/', DashboardController.index)
// router.post('/', DashboardController.create)
router.post('/delete/:id', DashboardController.destroy)

module.exports = router
