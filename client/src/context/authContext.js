import React, { createContext, useState } from "react"
import { useNavigate } from "react-router"

export const AuthContext = createContext({
	isLoggedIn: false,
	onSignin: (event, authData, cb) => {},
	onSignup: (event, authData, cb) => {},
	onSignout: () => {},
	authError: "",
	onRememberMe: () => {},
	isAuthLoading: false,
})

const AuthContextProvider = (props) => {
	const navigate = useNavigate()
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [authError, setAuthError] = useState("")
	const [isAuthLoading, setIsAuthLoading] = useState(false)

	const flag = localStorage.getItem("remember")

	const onSignin = async (event, authData, cb) => {
		event.preventDefault()
		const { email, password, rememberMe } = authData
		if (!email) return setAuthError("Email is required")
		if (!password) return setAuthError("Password is required")

		setIsAuthLoading(true)
		const res = await fetch("/users/signin", {
			body: JSON.stringify(authData),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		})
		const data = await res.json()
		if (res.status !== 200) {
			setIsAuthLoading(false)
			return setAuthError(data)
		}

		setIsAuthLoading(false)
		setIsLoggedIn(true)
		localStorage.setItem("whoami", data.ID)
		localStorage.setItem("remember", rememberMe)
		cb()
		return navigate("/")
	}

	const onSignup = async (event, authData, cb) => {
		event.preventDefault()
		const { email, password } = authData
		if (!email) return setAuthError("Email is required")
		if (!password) return setAuthError("Password is required")

		setIsAuthLoading(true)
		const res = await fetch("/users/signup", {
			body: JSON.stringify(authData),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		})
		if (res.status !== 200) {
			setIsAuthLoading(false)
			return setAuthError(await res.json())
		}
		setIsAuthLoading(false)
		alert("Signup successful")
		cb()
		return navigate("/signin")
	}

	const onSignout = async () => {
		const res = await fetch("/users/signout", {
			method: "GET",
			credentials: "include",
		})
		console.log(res)
		console.log(await res.json())
		localStorage.removeItem("remember")
		localStorage.removeItem("whoami")
		return setIsLoggedIn(false)
	}

	const onRememberMe = () => {
		if (flag === "true") return setIsLoggedIn(true)
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				onSignin,
				onSignout,
				onSignup,
				authError,
				setAuthError,
				onRememberMe,
				isAuthLoading,
			}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
