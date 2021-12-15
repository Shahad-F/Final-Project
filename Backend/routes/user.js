const router = require('express').Router(),

UserController = require("../controllers/user")

router.post('/signUp',UserController.signUp)
router.post('/login',UserController.authenticate)

module.exports =router