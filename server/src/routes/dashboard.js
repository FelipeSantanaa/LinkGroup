var express = require('express')
var router = express.Router()
const DashboardController = require('../controllers/DashboardController')
const authAdmin = require('../../middlewares/authAdmin')

router.get('/', authAdmin, DashboardController.index)
router.post('/update/:id', DashboardController.update)
router.post('/delete/:id', authAdmin, DashboardController.destroy)

module.exports = router
