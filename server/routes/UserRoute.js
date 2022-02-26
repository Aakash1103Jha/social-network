const router = require("express").Router()
const UserController = require("../controllers/UserController")
const validateUserData = require("../validations/validateUserData")

router.post("/signin", validateUserData, UserController.onSignin)
router.post("/signup", validateUserData, UserController.onSignup)

module.exports = router
