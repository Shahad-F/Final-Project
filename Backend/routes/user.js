const router = require('express').Router()
const User = require('../models/User');
const passport= require('passport');
UserController = require("../controllers/user")
UsController = require('../controllers/user')

 

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

router.get('/allUsers',UserController.index)
router.post('/UserSignUp',UserController.signup_post)
router.post('/UserLogin',UserController.signin_post)
router.put('/update/:uid',UserController.update)
router.delete('/delete/:uid',UserController.delete)

 

module.exports =router