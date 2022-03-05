const Comment = require("../models/Comment")

var comments = []

const getCommentsForPost = async (req, res) => {
	const { postId } = req.query
	try {
		const comments = await Comment.find({ postId }).sort({ createdAt: -1 })
		return res.status(200).json(comments)
	} catch (err) {
		console.error(`Comment error: ${err}`)
		return res.status(500).json("Could not add comment, something went wrong..")
	}
}
const addComment = async (req, res) => {
	const { postId } = req.params
	const { content } = req.body
	const userId = req.user.payload.id

	const newComment = new Comment({
		postId,
		content,
		userId,
	})
	try {
		await newComment.save()
		return res.status(200).json("Comment added successfully!")
	} catch (err) {
		console.error(`Comment error: ${err}`)
		return res.status(500).json("Could not add comment, something went wrong..")
	}
}
const editCommentById = async (req, res) => {}
const deleteCommentById = async (req, res) => {}
const likeComment = async (req, res) => {
	const _id = req.params.id
	var oneComment = comments.filter((item) => {
		if (item._id.toString() === _id) return item
	})
	oneComment[0].likes = oneComment[0].likes + 1
	res.send(oneComment)
}
const dislikeComment = async (req, res) => {
	const _id = req.params.id
	var oneComment = comments.filter((item) => {
		if (item._id.toString() === _id) return item
	})
	oneComment[0].dislikes = oneComment[0].dislikes + 1
	res.send(oneComment)
}

module.exports = {
	getCommentsForPost,
	addComment,
	editCommentById,
	deleteCommentById,
	likeComment,
	dislikeComment,
}
