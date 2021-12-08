const router = require('express').Router(),


AdminController = require('../controllers/admin')

router.get('/',AdminController.index)

router.post('/create',AdminController.create)

router.post('/login',AdminController.authenticate)

router.delete('/:uid/delete',AdminController.delete)

module.exports = router