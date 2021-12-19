const router = require("express").Router();
 
ProviderController = require("../controllers/provider")
 ProController = require("../controllers/ProviderController")

 


router.get('/',ProviderController.index)
router.post('/provider/:uid',ProviderController.create)
router.get('/display',ProviderController.show)
router.put('/change',ProviderController.change)
router.delete('/del/:uid',ProviderController.del)


router.put('/provider/:Sid/:Pid',ProviderController.edit)
router.delete('/provider/:Sid/:Pid',ProviderController.remove)


router.put('/update/:uid',ProviderController.update)
router.delete('/delete/:uid',ProviderController.delete)
router.get('/:uid',ProviderController.show)

router.post('/ProviderSignUp',ProController.signup_post)
router.post('/ProviderLogin',ProController.signin_post)







 


module.exports = router