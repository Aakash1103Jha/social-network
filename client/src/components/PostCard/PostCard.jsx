import React, { useContext } from "react"
import propTypes from "prop-types"

import styles from "./PostCard.module.css"
import Button from "../Button/Button"
import { AuthContext } from "../../context/authContext"

const PostCard = (props) => {
	const { post, likeOnePost, dislikeOnePost, deleteYourPost } = props
	const { isLoggedIn } = useContext(AuthContext)
	const { title, content, likes, dislikes, _id, userId } = post
	const whoAmI = localStorage.getItem("whoami") ?? undefined

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
			</div>
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
