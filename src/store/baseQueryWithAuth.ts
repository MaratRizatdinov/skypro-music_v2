import {
	BaseQueryApi,
	FetchArgs,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { RootState } from '.'
import { setUserToken, clearAllState } from './reducers/trackSlice'

export const baseQueryWithReauth = async (
	args: string | FetchArgs,
	api: BaseQueryApi,
	extraOptions: {},
) => {
	const baseQuery = fetchBaseQuery({
		baseUrl: 'https://skypro-music-api.skyeng.tech/',

		prepareHeaders(headers: Headers) {
			const token = (api.getState() as RootState).tracks.user?.access
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	})

	const result = await baseQuery(args, api, extraOptions)

	if (result?.error?.status !== 401) {
		return result
	}
	const logout = () => {
		api.dispatch(clearAllState())
		throw new Error('Ошибка')
	}

	const refreshtoken = localStorage.getItem('refresh')

	if (!refreshtoken) {
		return logout()
	}

	const refreshResult = await baseQuery(
		{
			url: 'user/token/refresh/',
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ refresh: refreshtoken }),
		},
		api,
		extraOptions,
	)

	if (refreshResult.error) {
		return logout()
	}
	if (refreshResult.data && typeof refreshResult.data === 'object') {
		if (
			'access' in refreshResult.data &&
			typeof refreshResult.data.access === 'string'
		) {
			const token = refreshResult.data.access
			api.dispatch(setUserToken(token))
		}
	}

	const retryResult = await baseQuery(args, api, extraOptions)

	if (retryResult?.error?.status === 401) {
		return logout()
	}

	return retryResult
}
