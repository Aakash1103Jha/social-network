import React, { useContext, useState } from "react"
import propTypes from "prop-types"

import styles from "./PostCard.module.css"
import Button from "../Button/Button"

import { AuthContext } from "../../context/authContext"
import Comment from "../Comment/Comment"

const PostCard = (props) => {
	const { isLoggedIn } = useContext(AuthContext)
	const { post, likeOnePost, dislikeOnePost, deleteYourPost } = props
	const { title, content, likes, dislikes, _id, userId } = post

	const [comments, setComments] = useState([])

	const [isCommentVisible, setIsCommentVisible] = useState(false)

	const whoAmI = localStorage.getItem("whoami") ?? undefined

	const getAllCommentsForPost = async (id) => {
		const res = await fetch(`/comments/all?postId=${id}`)
		if (res.status !== 200) return alert(await res.json())
		return setComments(await res.json())
	}

	return (
		<div className={styles.postcard}>
			<div className={styles.post_header}>
				<h1>{title}</h1>
				<p style={{ marginTop: "0.5rem" }}>{userId}</p>
			</div>
			<div className={styles.post_content}>
				<p>{content}</p>
			</div>

			<div className={styles.post_cta}>
				<Button
					label={`${likes} Likes`}
					onClick={likeOnePost.bind(null, _id.toString())}
					disabled={!isLoggedIn}
				/>
				<Button
					type="secondary"
					label={`${dislikes} Dislikes`}
					onClick={dislikeOnePost.bind(null, _id.toString())}
					disabled={!isLoggedIn}
				/>
				{whoAmI !== undefined && whoAmI?.length !== 0 && whoAmI === userId && (
					<Button
						type="secondary"
						label="Delete Post"
						onClick={deleteYourPost.bind(null, _id.toString())}
					/>
				)}
				{whoAmI !== undefined && whoAmI?.length !== 0 && (
					<Button
						type="secondary"
						label={`${comments.length || ""} Comment`}
						onClick={() => {
							getAllCommentsForPost(_id.toString())
							setIsCommentVisible(!isCommentVisible)
						}}
					/>
				)}
			</div>
			{isCommentVisible === true && (
				<Comment
					userId={userId}
					postId={_id}
					comments={comments}
					getAllCommentsForPost={getAllCommentsForPost}
					setIsCommentVisible={setIsCommentVisible}
				/>
			)}
		</div>
	)
}
PostCard.propTypes = {
	post: propTypes.object,
	likeOnePost: propTypes.func,
	dislikeOnePost: propTypes.func,
	deleteYourPost: propTypes.func,
}
export default PostCard
