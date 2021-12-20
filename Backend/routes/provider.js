const router = require("express").Router();
 
ProviderController = require("../controllers/provider")
 ProController = require("../controllers/ProviderController")

 

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
// update the price after check userId is exist 
router.put('/change/:eid',ProviderController.change)

router.delete('/del/:uid',ProviderController.del)




 


module.exports = router