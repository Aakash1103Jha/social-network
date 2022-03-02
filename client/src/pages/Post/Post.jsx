import React, { useState } from "react"

import styles from "./Post.module.css"

import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"

const Post = () => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const onPostSubmit = async (event) => {
		event.preventDefault()
		setIsLoading(true)
		const res = await fetch("/posts/add", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({ title: title, content: content }),
			headers: {
				"Content-Type": "application/json",
			},
		})
		const data = await res.json()
		if (res.status !== 200) {
			setIsLoading(false)
			return alert(data)
		}
		setTitle("")
		setContent("")
		setIsLoading(false)
		return alert(data)
	}

	return (
		<div className={styles.post}>
			{isLoading === false ? (
				<>
					<Header>
						<h1>New Post</h1>
					</Header>
					<div className={styles.post_form}>
						<form className={styles.form} onSubmit={onPostSubmit}>
							<label htmlFor="title">Title</label>
							<input
								id="title"
								type="text"
								placeholder="Some awesome title"
								value={title}
								onChange={(event) => setTitle(event.target.value)}
							/>
							<label htmlFor="title">Content</label>
							<textarea
								id="content"
								type="text"
								placeholder="I always write awesome things..."
								value={content}
								onChange={(event) => setContent(event.target.value)}></textarea>

							<Button label="Submit" style={{ margin: "2rem 0rem 0rem 0rem" }} />
						</form>
					</div>
				</>
			) : (
				<Loader />
			)}
		</div>
	)
}

export default Post
