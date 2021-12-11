const router =require('express').Router(),

AdminRouter =require('./admin')

ServiceRouter= require('./service')
ProviderRouter = require('./provider')

router.use('/admins',AdminRouter)
router.use('/services',ServiceRouter)

router.use('/services',ProviderRouter)


module.exports = router