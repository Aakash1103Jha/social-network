import React from "react"
import propTypes from "prop-types"

import styles from "./Header.module.css"

const Header = ({ children, ...rest }) => {
	return (
		<header className={styles.header} {...rest}>
			{children}
		</header>
	)
}
Header.propTypes = {
	children: propTypes.node,
}
export default Header
