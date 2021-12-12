const router = require("express").Router(),

ProviderController = require("../controllers/provider")


router.get('/',ProviderController.index)
// router.post('/c/:uid',ProviderController.create)
router.put('/update/:uid',ProviderController.update)
router.delete('/delete/:uid',ProviderController.delete)
router.post('/signUp',ProviderController.signUp)
router.post("/login",ProviderController.authenticate)

module.exports = router