import React from "react"
import propTypes from "prop-types"

import styles from "./Button.module.css"
/**
 * A reusable button component
 * @param {string} type null | secondary
 * @returns Button
 */
const Button = (props) => {
	const { label, type, disabled } = props
	return (
		<button
			className={`${styles.button} ${type === "secondary" ? styles.secondary : null} ${
				disabled === true ? styles.disabled : null
			}`}
			{...props}>
			{label}
		</button>
	)
}
Button.propTypes = {
	label: propTypes.string,
	type: propTypes.string,
}
export default Button
