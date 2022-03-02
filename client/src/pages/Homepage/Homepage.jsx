import React, { useEffect, useState } from "react"
import PostCard from "../../components/PostCard/PostCard"

import styles from "./Homepage.module.css"

const Homepage = () => {
	const [posts, setPosts] = useState([])
	/**
	 * A function that gets list of all posts
	 * from the server and returns an array of post object
	 * @returns [Post] [{_id: String, title: String, content: String, likes: Number, dislikes: Number}]
	 */
	const getAllPosts = async () => {
		const res = await fetch("/posts/all")
		const data = await res.json()
		setPosts(data)
	}
	/**
	 * A function that accepts post id as parameter
	 * and sends a http request to update count of likes
	 * @param {string} id
	 */
	const likeOnePost = async (id) => {
		await fetch(`/posts/like/${id}`, {
			method: "GET",
			body: null,
			credentials: "include",
		})
		await getAllPosts()
	}
	/**
	 * A function that accepts post id as parameter
	 * and sends a http request to update count of dislikes
	 * @param {string} id
	 */
	const dislikeOnePost = async (id) => {
		await fetch(`/posts/dislike/${id}`, {
			method: "GET",
			body: null,
			credentials: "include",
		})
		await getAllPosts()
	}

	useEffect(() => {
		getAllPosts()
	}, [])

	return (
		<div className={styles.homepage}>
			{posts.length !== 0 && posts !== undefined ? (
				posts.map((post) => {
					return (
						<PostCard
							key={post._id}
							post={post}
							likeOnePost={likeOnePost}
							dislikeOnePost={dislikeOnePost}
						/>
					)
				})
			) : (
				<h1>Loading</h1>
			)}
		</div>
	)
}

export default Homepage
