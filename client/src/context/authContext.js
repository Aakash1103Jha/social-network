import React, { createContext, useState } from "react"
import { useNavigate } from "react-router"

import validateEmail from "../validations/validateEmail"
import validatePassword from "../validations/validatePassword"

export const AuthContext = createContext({
	isLoggedIn: false,
	onSignin: (event, authData, cb) => {},
	onSignup: (event, authData, cb) => {},
	onSignout: () => {},
	authError: "",
})

const AuthContextProvider = (props) => {
	const navigate = useNavigate()
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [authError, setAuthError] = useState("")

	const onSignin = async (event, authData, cb) => {
		event.preventDefault()
		const { email, password, rememberMe } = authData
		if (!email) return setAuthError("Email is required")
		if (!password) return setAuthError("Password is required")

		const res = await fetch("/users/signin", {
			body: JSON.stringify(authData),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		})
		if (res.status !== 200) return setAuthError(await res.json())
		setIsLoggedIn(true)
		localStorage.setItem("rememberme", rememberMe)
		cb()
		return navigate("/")
	}
	const onSignup = async (event, authData, cb) => {
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
		if (res.status !== 200) return setAuthError(await res.json())
		alert("Signup successful")
		cb()
		return navigate("/signin")
	}
	const onSignout = () => {
		localStorage.removeItem("rememberme")
		setIsLoggedIn(false)
		return
	}

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, onSignin, onSignout, onSignup, authError, setAuthError }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
