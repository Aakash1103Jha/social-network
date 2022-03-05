import React, { Fragment, useState } from "react"
import propTypes from "prop-types"
import Button from "../Button/Button"
import Loader from "../Loader/Loader"

import styles from "./Comment.module.css"

const Comment = ({ userId, postId, comments, setIsCommentVisible, getAllCommentsForPost }) => {
	const [comment, setComment] = useState("")

	const onCommentHandler = async (event, data) => {
		event.preventDefault()
		const { comment, userId, postId } = data
		if (!comment || !userId || !postId) return alert("Cannot add empty comment")
		if (comment.length < 5) return alert("Comment must be at least 5 characters")

		const res = await fetch(`/comments/add/${postId}`, {
			body: JSON.stringify({ content: comment }),
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
		if (res.status !== 200) return alert(await res.json())
		setComment("")
		await getAllCommentsForPost(postId)
		return
	}

	return (
		<div className={styles.comments}>
			{comments ? (
				<div className={styles.comment_list}>
					{comments.map((item) => {
						return (
							<Fragment key={item._id}>
								<li className={styles.comment}>
									<p className={styles.comment_date}>
										Added on:{" "}
										{new Date(item.createdAt).toLocaleDateString("en-IN")}
									</p>
									<p className={styles.comment_user}>{item.userId}</p>
									<p className={styles.comment_text}>{item.content}</p>
								</li>
							</Fragment>
						)
					})}
				</div>
			) : (
				<Loader />
			)}
			<form
				key={"Comment_"}
				className={styles.comment_form}
				onSubmit={(event) => {
					onCommentHandler(event, { comment, userId, postId })
				}}>
				<input
					key="comment_field_"
					className={`${styles.input} ${comment.length < 5 && styles.warn}`}
					type="text"
					id="content"
					placeholder="Tip: Never say anything that you'd not want anyone to say to you"
					value={comment}
					onChange={(event) => setComment(event.target.value)}
				/>
				<Button label={"Comment"} />
			</form>
		</div>
	)
}

Comment.propTypes = {
	userId: propTypes.string,
	postId: propTypes.string,
	comments: propTypes.array,
	getAllCommentsForPost: propTypes.func,
}
export default Comment
