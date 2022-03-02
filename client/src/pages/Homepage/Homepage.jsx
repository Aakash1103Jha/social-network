import React, { useEffect, useState } from "react"
import PostCard from "../../components/PostCard/PostCard"
import Loader from "../../components/Loader/Loader"

import styles from "./Homepage.module.css"

const Homepage = () => {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	/**
	 * A function that gets list of all posts
	 * from the server and returns an array of post object
	 * @returns [Post] [{_id: String, title: String, content: String, likes: Number, dislikes: Number}]
	 */
	const getAllPosts = async () => {
		const res = await fetch("/posts/all")
		const data = await res.json()
		if (res.status !== 200) {
			return alert(data)
		}
		return data
	}
	/**
	 * A function that accepts post id as parameter
	 * and sends a http request to delete post for that id
	 * Also calls the getAllPost() function to refresh the page
	 * @param {string} id
	 */
	const deleteYourPost = async (id) => {
		setIsLoading(true)
		const res = await fetch(`/posts/delete/${id}`, {
			method: "GET",
			body: null,
			credentials: "include",
		})
		const data = await res.json()
		if (res.status !== 200) {
			return alert(data)
		}
		setIsLoading(false)
		await getAllPosts().then((data) => setPosts(data))
	}
	/**
	 * A function that accepts post id as parameter
	 * and sends a http request to update count of likes
	 * Also calls the getAllPost() function to refresh the page
	 * @param {string} id
	 */
	const likeOnePost = async (id) => {
		await fetch(`/posts/like/${id}`, {
			method: "GET",
			body: null,
			credentials: "include",
		})
		await getAllPosts().then((data) => setPosts(data))
	}
	/**
	 * A function that accepts post id as parameter
	 * and sends a http request to update count of dislikes
	 * Also calls the getAllPost() function to refresh the page
	 * @param {string} id
	 */
	const dislikeOnePost = async (id) => {
		await fetch(`/posts/dislike/${id}`, {
			method: "GET",
			body: null,
			credentials: "include",
		})
		await getAllPosts().then((data) => setPosts(data))
	}

	useEffect(() => {
		setIsLoading(true)
		getAllPosts()
			.then((data) => setPosts(data))
			.then(() => setIsLoading(false))
	}, [])

	return (
		<div className={styles.homepage}>
			{isLoading === false ? (
				posts.map((post) => {
					return (
						<PostCard
							key={post._id}
							post={post}
							likeOnePost={likeOnePost}
							dislikeOnePost={dislikeOnePost}
							deleteYourPost={deleteYourPost}
						/>
					)
				})
			) : (
				<Loader />
			)}
		</div>
	)
}

export default Homepage
