const router = require('express').Router(),

ServiceController = require('../controllers/service')

router.get('/',ServiceController.index)

router.post('/create',ServiceController.create)

module.exports = router