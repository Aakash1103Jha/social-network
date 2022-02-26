const Comment = require("../models/Comment")

var comments = []

const getCommentsForPost = async (req, res) => {
	res.send(comments)
}
const addComment = async (req, res) => {
	const newComment = new Comment({
		...req.body,
	})
	comments.push(newComment)
	res.send(comments)
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
