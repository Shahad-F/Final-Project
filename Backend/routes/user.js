const router = require('express').Router()
const User = require('../models/User');
const passport= require('passport');
UserController = require("../controllers/user")


// router.use(passportU.initialize());
// router.use(passportU.session());


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

router.get('/allUsers',UserController.index)
router.post('/UserSignUp',UserController.signUp)
router.post('/UserLogin',UserController.authenticate)
router.put('/update/:uid',UserController.update)
router.delete('/delete/:uid',UserController.delete)

 

module.exports =router