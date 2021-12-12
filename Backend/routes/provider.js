const router = require("express").Router(),

ProviderController = require("../controllers/provider")


router.get('/',ProviderController.index)
router.post('/provider/:uid',ProviderController.create)
router.put('/provider/:uid',ProviderController.update)
router.delete('/provider/:uid',ProviderController.delete)
router.post('/signUp',ProviderController.signUp)
router.post("/login",ProviderController.authenticate)

module.exports = router