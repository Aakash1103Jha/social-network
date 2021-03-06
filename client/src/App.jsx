import React, { lazy, Suspense, useContext, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router"

import styles from "./App.module.css"
import Loader from "./components/Loader/Loader"

import Navbar from "./components/Navbar/Nabar"
import Wrapper from "./components/Wrapper/Wrapper"
import { AuthContext } from "./context/authContext"

const Homepage = lazy(() => import("./pages/Homepage/Homepage"))
const Profile = lazy(() => import("./pages/Profile/Profile"))
const Post = lazy(() => import("./pages/Post/Post"))
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"))

const App = () => {
	const { isLoggedIn, onRememberMe } = useContext(AuthContext)

	useEffect(() => {
		onRememberMe()
	}, [isLoggedIn, onRememberMe])

	return (
		<div className={styles.App}>
			<Wrapper>
				<Navbar isLoggedIn={isLoggedIn} />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Suspense fallback={<Loader />}>
								<Homepage />
							</Suspense>
						}
					/>
					<Route
						exact
						path="/signin"
						element={
							<Suspense fallback={<Loader />}>
								<AuthPage />
							</Suspense>
						}
					/>
					<Route
						exact
						path="/signup"
						element={
							<Suspense fallback={<Loader />}>
								<AuthPage />
							</Suspense>
						}
					/>
					<Route
						exact
						path="/profile"
						element={
							isLoggedIn === true ? (
								<Suspense fallback={<Loader />}>
									<Profile />
								</Suspense>
							) : (
								<Navigate to="/" />
							)
						}
					/>
					<Route
						exact
						path="/new-post"
						element={
							isLoggedIn === true ? (
								<Suspense fallback={<Loader />}>
									<Post />
								</Suspense>
							) : (
								<Navigate to="/" />
							)
						}
					/>
				</Routes>
			</Wrapper>
		</div>
	)
}

export default App
