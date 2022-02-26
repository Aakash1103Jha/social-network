import React, { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router"

import styles from "./App.module.css"

const Homepage = lazy(() => import("./pages/Homepage/Homepage"))
const Profile = lazy(() => import("./pages/Profile/Profile"))

const isLoggedIn = true

const App = () => {
	return (
		<div className={styles.App}>
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
			</Routes>
		</div>
	)
}

export default App
