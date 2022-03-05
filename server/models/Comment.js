const { Schema, model } = require("mongoose")

const Comment = new Schema(
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
			minLength: 5,
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
