import React, { createContext, useState } from "react"

export const AuthContext = createContext({
	isLoggedIn: false,
	onSignin: (event, authData) => {},
	onSignup: (event, authData) => {},
	onSignout: () => {},
})

const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const onSignin = (event, authData) => {
		event.preventDefault()
		setIsLoggedIn(true)
	}
	const onSignup = (event, authData) => {
		event.preventDefault()
	}
	const onSignout = () => {
		setIsLoggedIn(false)
	}

	return (
		<AuthContext.Provider value={{ isLoggedIn, onSignin, onSignout, onSignup }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthContextProvider
