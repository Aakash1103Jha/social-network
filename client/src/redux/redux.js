import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialState = { isLoggedIn: false }

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		onSignin(state, action) {
			console.log(action.payload)
			state.isLoggedIn = true
		},
		onSignup(state, action) {},
		onSignout(state, action) {
			state.isLoggedIn = false
		},
	},
})

const reduxAuthStore = configureStore({
	reducer: { authReducer: authSlice.reducer },
})

export const authActions = authSlice.actions

export default reduxAuthStore
