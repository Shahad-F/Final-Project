const router = require("express").Router(),

ProviderController = require("../controllers/provider")

router.post('/provider/:id',ProviderController.create)

module.exports = router