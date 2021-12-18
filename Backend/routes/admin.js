const router = require('express').Router();
const passportA = require('passport');
const Admin = require('../models/Admen')


AdminController = require('../controllers/admin')
router.use(passportA.initialize())
router.use(passportA.session())

passportA.use(Admin.createStrategy())
passportA.serializeUser(Admin.serializeUser())
passportA.deserializeUser(Admin.deserializeUser())


router.get('/',AdminController.index)

router.post('/create',AdminController.create)

router.post('/AdminLogin',AdminController.authenticate)

router.delete('/:uid/delete',AdminController.delete)

router.put('/:uid/update',AdminController.update)




module.exports = router