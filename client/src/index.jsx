import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import reduxAuthStore from "./redux/redux.js"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={reduxAuthStore}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root"),
)

reportWebVitals(console.log)
