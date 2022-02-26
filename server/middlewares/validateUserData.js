const validateEmail = require("../validations/validateEmail")
const validatePassword = require("../validations/validatePassword")

module.exports = async (req, res, next) => {
	if (!req.body) return res.status(400).json("Either data is not provided or is invalid")
	const { email, password } = req.body
	if (!email) return res.status(400).json("Email is required!")
	const isValidEmail = validateEmail(email)
	if (isValidEmail === false) return res.status(400).json("Email is invalid!")
	if (!password) return res.status(400).json("Password is required!")
	const isValidPassword = validatePassword(password)
	if (isValidPassword === false)
		return res
			.status(400)
			.json(
				"Password must at least 8 characters long, with an uppercase, a number and a special character",
			)
	next()
}
