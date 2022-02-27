import React, { useContext } from "react"
import { NavLink } from "react-router-dom"

import styles from "./Navbar.module.css"
import Button from "../Button/Button"
import Logo from "../../assets/images/love.png"
import { AuthContext } from "../../context/authContext"

const Navbar = () => {
	const { isLoggedIn, onSignin } = useContext(AuthContext)

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
							onClick={(event) =>
								onSignin(event, { email: "aakash@me.com", password: "123" })
							}
						/>
						{/* </NavLink> */}
					</li>
				)}
				{isLoggedIn === true && (
					<>
						<li>
							<NavLink to="/new-post">
								<Button label="New Post" />
							</NavLink>
						</li>
						<li>
							<NavLink to="/profile">
								<Button type="secondary" label="Profile" />
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}

export default Navbar
