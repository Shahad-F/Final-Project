const router = require("express").Router();
const passport = require('passport');
ProviderController = require("../controllers/provider")

const Provider = require('../models/ProvidorS')

// router.use(passportP.initialize())
// router.use(passportP.session())

passport.use(Provider.createStrategy())
passport.serializeUser(Provider.serializeUser())
passport.deserializeUser(Provider.deserializeUser())


router.get('/',ProviderController.index)
router.post('/provider/:uid',ProviderController.create)
router.get('/display',ProviderController.show)
router.put('/change/:uid',ProviderController.change)
router.delete('/del/:uid',ProviderController.del)


router.put('/provider/:Sid/:Pid',ProviderController.edit)
router.delete('/provider/:Sid/:Pid',ProviderController.remove)


router.put('/update/:uid',ProviderController.update)
router.delete('/delete/:uid',ProviderController.delete)
router.get('/:uid',ProviderController.show)

router.post('/ProviderSignUp',ProviderController.signUp)
router.post('/ProviderLogin',ProviderController.authenticate)




 


module.exports = router