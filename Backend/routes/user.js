const router = require('express').Router(),

UserController = require("../controllers/user")

router.post('/signUp',UserController.signUp)
router.post('/login',UserController.authenticate)
router.update('/update',UserController.update)
router.delete('/delete',UserController.delete)

module.exports =router