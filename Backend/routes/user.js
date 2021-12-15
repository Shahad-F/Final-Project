const router = require('express').Router(),

UserController = require("../controllers/user")

router.get('/allUsers',UserController.index)
router.post('/signUp',UserController.signUp)
router.post('/login',UserController.authenticate)
router.put('/update/:uid',UserController.update)
router.delete('/delete/:uid',UserController.delete)

module.exports =router