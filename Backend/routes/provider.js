const router = require("express").Router();
 
ProviderController = require("../controllers/provider")
 ProController = require("../controllers/ProviderController")

 


 
 
router.put('/change/:eid',ProviderController.change)
router.delete('/del/:uid',ProviderController.del)

router.put('/provider/:Sid/:Pid',ProviderController.edit)
router.delete('/provider/:Sid/:Pid',ProviderController.remove)

router.put('/update/:uid',ProviderController.update)
router.delete('/delete/:uid',ProviderController.delete)
router.get('/:uid',ProviderController.show)

// -------------------------------------------------
// display all providers
router.get('/',ProviderController.index)
// signup provider
router.post('/ProviderSignUp',ProController.signup_post)
//  login provider
router.post('/ProviderLogin',ProController.signin_post)
router.post('/provider/:uid',ProviderController.create)
router.get('/display',ProviderController.showbyId)






 


module.exports = router