const router = require('express').Router(),

UserController = require("../controllers/user")

router.post('/signUp',UserController.signUp)

module.exports =router