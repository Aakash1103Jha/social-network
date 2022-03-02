const Post = require("../models/Post")
const data = require("../posts.json")

const posts = [...data]

const getAllPosts = async (req, res) => {
	try {
		const allPosts = await Post.find()
		return res.status(200).json(allPosts)
	} catch (err) {
		console.error(`New Post Error: ${err}`)
		res.status(500).json("Something went wrong..")
	}
}

const getAllPostsForUser = async (req, res) => {}

const addPost = async (req, res) => {
	const newPost = new Post({
		...req.body,
		userId: req.user.payload.id,
	})
	try {
		await newPost.save()
		return res.status(200).json("Post successful!")
	} catch (err) {
		console.error(`New Post Error: ${err}`)
		res.status(500).json("Something went wrong..")
	}
}
const editPostById = async (req, res) => {
	console.log(req.params.id)
}

const deletePostById = async (req, res) => {}

const likePostById = async (req, res) => {
	try {
		const _id = req.params.id
		const onePost = await Post.findById({ _id })
		await Post.findByIdAndUpdate(
			{ _id },
			{ $set: { likes: onePost.likes + 1 } },
			{ upsert: false },
		)
		return res.status(204).json("Thanks!")
	} catch (err) {
		console.error(`Dislike Error: ${err}`)
	}
}

const dislikePostById = async (req, res) => {
	try {
		const _id = req.params.id
		const onePost = await Post.findById({ _id })
		await Post.findByIdAndUpdate(
			{ _id },
			{ $set: { dislikes: onePost.dislikes + 1 } },
			{ upsert: false },
		)
		return res.status(204).json("Thanks!")
	} catch (err) {
		console.error(`Dislike Error: ${err}`)
	}
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
