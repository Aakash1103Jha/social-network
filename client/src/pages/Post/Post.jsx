import React, { useState, useEffect } from "react"

import styles from "./Post.module.css"

import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"

const Post = () => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")
	const [image, setImage] = useState()
	const [preview, setPreview] = useState()
	const [isLoading, setIsLoading] = useState(false)

	const onPostSubmit = async (event) => {
		const fd = new FormData()
		fd.append("title", title)
		fd.append("content", content)
		fd.append("image", image, image.name)

		event.preventDefault()
		setIsLoading(true)
		const res = await fetch("/posts/add", {
			method: "POST",
			credentials: "include",
			body: fd,
			// headers: {
			// 	"Content-Type": "application/json",
			// },
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

	useEffect(() => {
		if (!image) return setPreview(undefined)

		const objectUrl = URL.createObjectURL(image)
		setPreview(objectUrl)
		// free memory when ever this component is unmounted
		return () => URL.revokeObjectURL(objectUrl)
	}, [image])

	const onSelectImage = (e) => {
		if (!e.target.files || e.target.files.length === 0) {
			setImage(undefined)
			return
		}
		return setImage(e.target.files[0])
	}

	return (
		<div className={styles.post}>
			{isLoading === false ? (
				<>
					<Header>
						<h1>New Post</h1>
					</Header>
					<div className={styles.post_form}>
						<form
							className={styles.form}
							onSubmit={onPostSubmit}
							encType="multipart/form-data">
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
							<input id="image" type="file" onChange={onSelectImage} />
							{image && (
								<img className={styles.preview} src={preview} alt="preview" />
							)}
							<Button label="Post" style={{ margin: "2rem 0rem 0rem 0rem" }} />
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
