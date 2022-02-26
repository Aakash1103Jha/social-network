const router = require("express").Router()
const UserController = require("../controllers/UserController")

router.post("/signin", UserController.onSignin)
router.post("/signup", UserController.onSignup)

module.exports = router
