const router = require('express').Router(),

UserController = require("../controllers/user")

router.post('/signUp',UserController.siginUp)

module.exports =router