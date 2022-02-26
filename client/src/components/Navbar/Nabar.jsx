import React from "react"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import styles from "./Navbar.module.css"
import { authActions } from "../../redux/redux"
import Button from "../Button/Button"
import Logo from "../../assets/images/love.png"

const Navbar = () => {
	const { isLoggedIn } = useSelector((state) => state.authReducer)
	const dispatch = useDispatch()

	return (
		<nav className={styles.navbar}>
			<NavLink to="/">
				<div className={styles.logo}>
					<img className={styles.logo_img} src={Logo} alt="logo" />
					<p>The Social Network</p>
				</div>
			</NavLink>
			<ul className={styles.links}>
				{isLoggedIn === false && (
					<li>
						{/* <NavLink to="/signin"> */}
						<Button
							label="Signin"
							onClick={dispatch.bind(
								null,
								authActions.onSignin({
									email: "aakash@me.com",
									password: "123asd",
								}),
							)}
						/>
						{/* </NavLink> */}
					</li>
				)}
				{isLoggedIn === true && (
					<>
						<li>
							<NavLink to="/profile">
								<Button label="Profile" />
							</NavLink>
						</li>
						<li>
							{/* <NavLink to="/signout"> */}
							<Button
								type="secondary"
								label="Signout"
								onClick={dispatch.bind(null, authActions.onSignout())}
							/>
							{/* </NavLink> */}
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}

export default Navbar
