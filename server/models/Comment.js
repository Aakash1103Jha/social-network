const { Schema, model } = require("mongoose")

const Comment = Schema(
	{
		postId: {
			type: String,
			required: true,
		},
		userId: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
			minLength: [10, "Comment length should be at least 10 characters"],
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

module.exports = model("comments", Comment)
