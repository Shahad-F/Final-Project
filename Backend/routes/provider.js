const router = require("express").Router(),

ProviderController = require("../controllers/provider")


router.get('/',ProviderController.index)

router.post('/provider/:uid',ProviderController.create)
router.get('/display',ProviderController.show)
router.post('/change/:uid',ProviderController.change)



router.put('/provider/:Sid/:Pid',ProviderController.edit)
router.delete('/provider/:Sid/:Pid',ProviderController.remove)


router.put('/update/:uid',ProviderController.update)
router.delete('/delete/:uid',ProviderController.delete)
router.get('/:uid',ProviderController.show)
router.post('/signUp',ProviderController.signUp)
router.post("/login",ProviderController.authenticate)

module.exports = router