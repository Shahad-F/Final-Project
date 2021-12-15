const router =require('express').Router(),


AdminRouter =require('./admin')
ServiceRouter= require('./service')
ProviderRouter = require('./provider')
UserRouter = require('./user')

router.use('/admins',AdminRouter)
router.use('/services',ServiceRouter)
router.use('/providers',ProviderRouter)
router.use('/users',UserRouter)


module.exports = router