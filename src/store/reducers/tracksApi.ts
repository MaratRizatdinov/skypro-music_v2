/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import {
	createApi,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import {
	ICategoryResponse,
	Itrack,
	ItrackResponse,
	ICategoryProps,
	IFavoriteResponse,
} from '../../types/ITrack'
import { RootState } from '..'

export const tracksApi = createApi({
	reducerPath: 'tracksApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/',
		prepareHeaders(headers, api) {
			const token = (api.getState() as RootState).tracks.user?.access
			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	tagTypes: ['Track'],
	endpoints: builder => ({
		getAllTracks: builder.query<Itrack[], number>({
			query: () => 'track/all/',
			transformResponse: (response: ItrackResponse[], meta, arg): Itrack[] => {
				const result: Itrack[] = response.map(elem => {
					const obj = { isLiked: false }
					if (elem.stared_user.filter(item => item.id === arg).length) {
						obj.isLiked = true
					}

					return (elem = { ...elem, ...obj })
				})

				return result
			},
			transformErrorResponse: (error): FetchBaseQueryError => error,
			providesTags: ['Track'],
		}),

		getCategoryTracks: builder.query<Itrack[], ICategoryProps>({
			query: ({ categoryId }) => `selection/${categoryId}`,
			transformResponse: (response: ICategoryResponse, meta, arg): Itrack[] => {
				const array = response.items
				const result: Itrack[] = array.map(elem => {
					const obj = { isLiked: false }
					if (elem.stared_user.filter(item => item.id === arg.userID).length) {
						obj.isLiked = true
					}

					return (elem = { ...elem, ...obj })
				})

				return result
			},
			transformErrorResponse: (error): FetchBaseQueryError => error,
			providesTags: ['Track'],
		}),
		getFavoriteTracks: builder.query<Itrack[], void>({
			query: () => `track/favorite/all/`,
			transformResponse: (response: IFavoriteResponse[]): Itrack[] => {
				
				const result: Itrack[] = response.map(elem => {
					const obj = { isLiked: true }
					

					return (elem = { ...elem, ...obj })
				})

				return result
			},
			transformErrorResponse: (error): FetchBaseQueryError => error,
			providesTags: ['Track'],
		}),

		addLike: builder.mutation({
			query: ({ id }) => ({
				url: `track/${id}/favorite/`,
				method: 'POST',
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
			invalidatesTags: ['Track'],
		}),
		deleteLike: builder.mutation({
			query: ({ id }) => ({
				url: `track/${id}/favorite/`,
				method: 'DELETE',
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
			invalidatesTags: ['Track'],
		}),
	}),
})
export const {
	useGetAllTracksQuery,
	useAddLikeMutation,
	useDeleteLikeMutation,
	useGetCategoryTracksQuery,
	useGetFavoriteTracksQuery,
} = tracksApi
// https://skypro-music-api.skyeng.tech/catalog/track/<id>/favorite/
