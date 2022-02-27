import React, { createContext, useState } from "react"

import validateEmail from "../validations/validateEmail"
import validatePassword from "../validations/validatePassword"

export const AuthContext = createContext({
	isLoggedIn: false,
	onSignin: (event, authData) => {},
	onSignup: (event, authData) => {},
	onSignout: () => {},
	authError: "",
})

const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [authError, setAuthError] = useState("")

	const onSignin = async (event, authData) => {
		event.preventDefault()
		const { email, password } = authData
		if (!email) return setAuthError("Email is required")
		if (!password) return setAuthError("Password is required")

		const res = await fetch("/users/signin", {
			body: JSON.stringify(authData),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		})
		if (res.status !== 200) return alert(await res.json())
		// if (!res.status === 200) return setAuthError(await res.json())
		return setIsLoggedIn(true)
	}
	const onSignup = async (event, authData) => {
		event.preventDefault()
		const { email, password } = authData
		if (!email) return setAuthError("Email is required")
		if (!password) return setAuthError("Password is required")

		const res = await fetch("/users/signup", {
			body: JSON.stringify(authData),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		})
		if (res.status !== 200) return alert(await res.json())
		// if (!res.status === 200) return setAuthError(await res.json())
		return alert("Signup successful")
	}
	const onSignout = () => {
		setIsLoggedIn(false)
	}

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, onSignin, onSignout, onSignup, authError, setAuthError }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
