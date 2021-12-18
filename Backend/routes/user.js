const router = require('express').Router();
 
 
// UserController = require("../controllers/user")
UsController = require('../controllers/userController')

 

 

// router.get('/allUsers',UserController.index)

router.post('/UserSignUp',UsController.signup_post)
router.post('/UserLogin',UsController.signin_post)

// router.put('/update/:uid',UserController.update)
// router.delete('/delete/:uid',UserController.delete)

 

module.exports =router