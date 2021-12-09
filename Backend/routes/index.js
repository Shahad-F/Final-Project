const router =require('express').Router(),

AdminRouter =require('./admin')
ServiceRouter= require('./services')

router.use('/admins',AdminRouter)
router.use('/services')


module.exports = router