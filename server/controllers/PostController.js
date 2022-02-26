const Post = require("../models/Post")

const getAllPosts = async (req, res) => {}
const getAllPostsForUser = async (req, res) => {}
const addPost = async (req, res) => {
	const newPost = new Post({
		...req.body,
	})
	res.send(newPost)
}
const editPostById = async (req, res) => {}
const deletePostById = async (req, res) => {}
const likePostById = async (req, res) => {}
const dislikePostById = async (req, res) => {}

module.exports = {
	getAllPosts,
	getAllPostsForUser,
	addPost,
	editPostById,
	deletePostById,
	likePostById,
	dislikePostById,
}
