const router = require('express').Router(),

UserController = require("../controllers/user")

router.get('/allUsers',UserController.index)
router.post('/UserSignUp',UserController.signUp)
router.post('/UserLogin',UserController.authenticate)
router.put('/update/:uid',UserController.update)
router.delete('/delete/:uid',UserController.delete)

module.exports =router