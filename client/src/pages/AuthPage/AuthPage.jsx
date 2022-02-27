import React, { useContext, useState, useEffect, useCallback } from "react"
import { useLocation } from "react-router"

import styles from "./AuthPage.module.css"

import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"

import { AuthContext } from "../../context/authContext"

const AuthPage = () => {
	const { authError, setAuthError, onSignin, onSignup } = useContext(AuthContext)

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confPass, setConfPass] = useState("")
	const [rememberMe, setRememberMe] = useState(false)

	const path = useLocation().pathname.split("/")[1]

	const onSubmitHandler = (event) => {
		event.preventDefault()
		if (path === "signin") return onSignin(event, { email, password, rememberMe }, clearFields)
		if (password !== confPass) return setAuthError("Passwords do not match")
		if (path === "signup") return onSignup(event, { email, password }, clearFields)
	}

	const clearFields = useCallback(() => {
		setEmail("")
		setPassword("")
		setConfPass("")
		setAuthError("")
	}, [setAuthError])

	useEffect(() => {
		clearFields()
	}, [path, clearFields])

	return (
		<div className={styles.authpage}>
			<Header>
				<h1>{path === "signin" ? "Signin" : "Signup"}</h1>
			</Header>
			<div className={styles.auth_form}>
				<form className={styles.form} onSubmit={onSubmitHandler}>
					<label htmlFor="title">
						Email <span className={styles.required}>*</span>
					</label>
					<input
						id="email"
						type="email"
						placeholder="janedoe@example.com"
						value={email}
						onChange={(event) => {
							setAuthError("")
							setEmail(event.target.value)
						}}
					/>
					<label htmlFor="password">
						Password <span className={styles.required}>*</span>
					</label>
					<input
						id="password"
						type="password"
						placeholder="Janedoe@123"
						minLength={8}
						value={password}
						onChange={(event) => {
							setAuthError("")
							setPassword(event.target.value)
						}}
					/>
					{path === "signup" && (
						<>
							<label htmlFor="confPass">
								Password <span className={styles.required}>*</span>
							</label>
							<input
								id="confPass"
								type="password"
								placeholder="Confirm password"
								minLength={8}
								value={confPass}
								onChange={(event) => {
									setAuthError("")
									setConfPass(event.target.value)
								}}
							/>
						</>
					)}
					{path === "signin" && (
						<div
							className={styles.remember_me}
							onClick={setRememberMe.bind(null, !rememberMe)}>
							<input
								type="checkbox"
								value={rememberMe}
								checked={rememberMe === true ? true : false}
								onChange={setRememberMe.bind(null, !rememberMe)}
							/>
							<label htmlFor="rememberMe">Remember Me</label>
						</div>
					)}
					{authError && authError.length !== 0 && (
						<p className={styles.error}>{authError}</p>
					)}
					<Button
						label={path === "signin" ? "Signin" : "Signup"}
						style={{ margin: "2rem 0rem 0rem 0rem" }}
					/>
				</form>
			</div>
		</div>
	)
}

export default AuthPage
