import React, { useState } from "react"

import styles from "./Post.module.css"

import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"

const Post = () => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	const onPostSubmit = (event) => {
		event.preventDefault()
		const post = { title, content }
		console.log(post)
	}

	return (
		<div className={styles.post}>
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
		</div>
	)
}

export default Post
