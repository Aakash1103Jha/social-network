import React from "react"
import { useDispatch } from "react-redux"
import { authActions } from "../../redux/redux"

import styles from "./Profile.module.css"

import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"

const Profile = () => {
	const dispatch = useDispatch()

	return (
		<div className={styles.profile}>
			<Header>
				<h1>Profile</h1>
			</Header>
			<Button
				style={{ margin: "0rem" }}
				onClick={dispatch.bind(null, authActions.onSignout())}
				label="Signout"
			/>
		</div>
	)
}

export default Profile
