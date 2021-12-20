const router = require('express').Router();
 

AdController = require('../controllers/adminController')
AdminController = require('../controllers/admin')


router.get('/',AdminController.index)
router.delete('/:uid/delete',AdminController.delete)

 
router.post('/AdSignup',AdController.signup_post)
router.post('/AdSignin' ,AdController.signin_post)


module.exports = router