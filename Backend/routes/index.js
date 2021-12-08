const router =require('express').Router(),

AdminRouter =require('./admin')

router.use('/admins',AdminRouter)

module.exports = router