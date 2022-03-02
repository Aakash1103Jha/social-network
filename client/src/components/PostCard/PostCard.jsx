import React, { useContext } from "react"
import propTypes from "prop-types"

import styles from "./PostCard.module.css"
import Button from "../Button/Button"
import { AuthContext } from "../../context/authContext"

const PostCard = ({ post, likeOnePost, dislikeOnePost }) => {
	const { isLoggedIn } = useContext(AuthContext)
	const { title, content, likes, dislikes, _id, userId } = post

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
			</div>
		</div>
	)
}
PostCard.propTypes = {
	post: propTypes.object,
}
export default PostCard
