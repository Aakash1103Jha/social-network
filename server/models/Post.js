const { Schema, model } = require("mongoose")

const Post = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
			minLength: [10, "Content length should be at least 10 characters"],
		},
		likes: {
			type: Number,
			required: false,
			default: 0,
		},
		dislikes: {
			type: Number,
			required: false,
			default: 0,
		},
	},
	{ timestamps: true },
)

module.exports = model("posts", Post)
