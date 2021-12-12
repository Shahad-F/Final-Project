const router = require('express').Router(),

ServiceController = require('../controllers/service')

router.get('/',ServiceController.index)

router.post('/create',ServiceController.create)

//router.post('/provider/:uid',ServiceController.create)

router.delete('/:uid/delete',ServiceController.delete)

router.put('/:id/update',ServiceController.update)

router.get('/:uid',ServiceController.show)

 
module.exports = router