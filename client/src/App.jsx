import React, { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router"
import { useSelector } from "react-redux"

import styles from "./App.module.css"

import Navbar from "./components/Navbar/Nabar"
import Wrapper from "./components/Wrapper/Wrapper"

const Homepage = lazy(() => import("./pages/Homepage/Homepage"))
const Profile = lazy(() => import("./pages/Profile/Profile"))
const Post = lazy(() => import("./pages/Post/Post"))

const App = () => {
	const { isLoggedIn } = useSelector((state) => state.authReducer)

	return (
		<div className={styles.App}>
			<Wrapper>
				<Navbar isLoggedIn={isLoggedIn} />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Suspense fallback={<>Loading</>}>
								<Homepage />
							</Suspense>
						}
					/>
					<Route
						exact
						path="/profile"
						element={
							isLoggedIn === true ? (
								<Suspense fallback={<>Loading</>}>
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
								<Suspense fallback={<>Loading</>}>
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
