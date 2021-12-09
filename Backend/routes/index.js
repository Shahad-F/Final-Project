const router =require('express').Router(),

AdminRouter =require('./admin')
ServiceRouter= require('./service')

router.use('/admins',AdminRouter)
router.use('/services',ServiceRouter)


module.exports = router