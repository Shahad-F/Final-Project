const router = require("express").Router(),

ProviderController = require("../controllers/provider")

router.post('/provider/:id',ProviderController.create)
router.post('/provider',ProviderController.signUp)

module.exports = router