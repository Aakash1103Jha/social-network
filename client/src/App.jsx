import React, { lazy, Suspense } from "react"
import { Route, Routes } from "react-router"

import styles from "./App.module.css"
import Loader from "./components/Loader/Loader"

const Homepage = lazy(() => import("./pages/Homepage/Homepage"))

const App = () => {
	return (
		<div className={styles.App}>
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
			</Routes>
		</div>
	)
}

export default App
