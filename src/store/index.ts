import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './reducers/trackSlice'

import { tracksApi } from './reducers/tracksApi'

export const store = configureStore({
	reducer: {
		tracks: trackReducer,

		[tracksApi.reducerPath]: tracksApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(tracksApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
