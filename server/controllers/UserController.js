const User = require("../models/User")

const { genSalt, hash, compare } = require("bcrypt")
const { sign } = require("jsonwebtoken")

const onSignin = async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.findOne({ email: email })
		if (!user) return res.status(404).json("User not found")
		const isCorrectPassword = await compare(password, user.password)
		if (!isCorrectPassword) return res.status(403).json("Incorrect password")
		const token = sign({ id: user._id }, process.env.TOKEN_SECRET, {
			noTimestamp: false,
			algorithm: "HS512",
			issuer: "thesocialnetwork",
		})
		return res
			.status(200)
			.cookie("token", token, {
				httpOnly: true,
				signed: true,
				expires: new Date(Date.now() + 3600000),
			})
			.json({ ID: user._id })
	} catch (err) {
		console.error(`Signin error: ${err}`)
		return res.status(500).json("Something went wrong")
	}
}

const onSignup = async (req, res) => {
	const { email, password } = req.body
	const user = await User.findOne({ email })
	if (user) return res.status(400).json("Email already in use")
	const hashPassword = await hash(password, await genSalt(10))
	const newUser = new User({
		email,
		password: hashPassword,
	})
	try {
		await newUser.save()
		return res.status(200).json("Signup successful!")
	} catch (err) {
		console.error(`Signup error: ${err}`)
		return res.status(500).json("Something went wrong")
	}
}

const onResetPassword = async (req, res) => {
	const user = await User.findById({ _id })
}

module.exports = { onSignin, onSignup, onResetPassword }
