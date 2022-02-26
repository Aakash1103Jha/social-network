import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

import Button from "../Button/Button"

const Navbar = ({ isLoggedIn }) => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>The Social Network</div>
			<ul className={styles.links}>
				{isLoggedIn === false && (
					<li>
						<NavLink to="/signin">
							<Button label="Signin" />
						</NavLink>
					</li>
				)}
				{isLoggedIn === true && (
					<>
						<li>
							<NavLink to="/profile">
								<Button label="My Profile" />
							</NavLink>
						</li>
						<li>
							<NavLink to="/signout">
								<Button type="secondary" label="Signout" />
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}

export default Navbar
