import React from "react"
import { useDispatch } from "react-redux"
import { authActions } from "../../redux/redux"

import styles from "./Profile.module.css"

import Button from "../../components/Button/Button"

const Profile = () => {
	const dispatch = useDispatch()

	return (
		<div className={styles.profile}>
			<p>Profile</p>
			<Button onClick={dispatch.bind(null, authActions.onSignout())} label="Signout" />
		</div>
	)
}

export default Profile
