import React, { useContext } from "react"

import styles from "./Profile.module.css"

import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"
import { AuthContext } from "../../context/authContext"

const Profile = () => {
	const { onSignout } = useContext(AuthContext)

	return (
		<div className={styles.profile}>
			<Header>
				<h1>Profile</h1>
			</Header>
			<Button style={{ margin: "0rem" }} onClick={onSignout} label="Signout" />
		</div>
	)
}

export default Profile
