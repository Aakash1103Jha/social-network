const Post = require("../models/Post")
const data = require("../posts.json")

const posts = [...data]

const getAllPosts = async (req, res) => {
	res.json(posts)
}
const getAllPostsForUser = async (req, res) => {}
const addPost = async (req, res) => {
	const newPost = new Post({
		...req.body,
	})
	res.send(newPost)
}
const editPostById = async (req, res) => {}
const deletePostById = async (req, res) => {}
const likePostById = async (req, res) => {
	const _id = req.params.id
	var onePost = posts.filter((item) => {
		if (item._id.toString() === _id) return item
	})
	onePost[0].likes = onePost[0].likes + 1
	res.json(posts)
}
const dislikePostById = async (req, res) => {
	const _id = req.params.id
	var onePost = posts.filter((item) => {
		if (item._id.toString() === _id) return item
	})
	onePost[0].dislikes = onePost[0].dislikes + 1
	res.json(posts)
}

module.exports = {
	getAllPosts,
	getAllPostsForUser,
	addPost,
	editPostById,
	deletePostById,
	likePostById,
	dislikePostById,
}
