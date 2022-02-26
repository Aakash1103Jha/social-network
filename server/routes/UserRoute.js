const router = require("express").Router()
const UserController = require("../controllers/UserController")
const validateUserData = require("../middlewares/validateUserData")

router.post("/signin", validateUserData, UserController.onSignin)
router.post("/signup", validateUserData, UserController.onSignup)

module.exports = router
