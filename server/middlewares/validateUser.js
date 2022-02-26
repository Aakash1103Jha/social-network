const { verify } = require("jsonwebtoken")

module.exports = async (req, res, next) => {
	if (!req.signedCookies.token) return res.status(403).json("Access denied ⛔️")
	const token = req.signedCookies.token
	try {
		const validUser = verify(token, process.env.TOKEN_SECRET, { complete: true })
		if (!validUser) return res.status(403).json("Unauthorized user ⛔️")
		req.user = validUser
		next()
	} catch (error) {
		console.error(error)
		res.status(500).json("Something went wrong")
	}
}
