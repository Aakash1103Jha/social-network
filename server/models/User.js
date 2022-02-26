const { Schema, model } = require("mongoose")

const User = Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minLength: [8, "Password must be at least 8 characters"],
		},
	},
	{ timestamps: true },
)

module.exports = model("users", User)
