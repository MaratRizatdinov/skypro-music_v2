import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './reducers/trackSlice'
import { userApi } from './reducers/userApi'
import { tracksApi } from './reducers/tracksApi'

export const store = configureStore({
	reducer: {
		tracks: trackReducer,
		[userApi.reducerPath]: userApi.reducer,
		[tracksApi.reducerPath]: tracksApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(userApi.middleware)
			.concat(tracksApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
