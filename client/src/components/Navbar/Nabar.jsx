import React from "react"
import propTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router"

import styles from "./Navbar.module.css"
import Button from "../Button/Button"
import Logo from "../../assets/images/love.png"

const Navbar = ({ isLoggedIn }) => {
	const path = useLocation().pathname.split("/")[1]

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
						<NavLink to={path === "signin" ? "/signup" : "/signin"}>
							<Button label={path === "signin" ? "Signup" : "Signin"} />
						</NavLink>
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
Navbar.propTypes = {
	isLoggedIn: propTypes.bool.isRequired,
}

export default Navbar
