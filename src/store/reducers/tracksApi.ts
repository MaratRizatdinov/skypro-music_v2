/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { createApi, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import {
	ICategoryResponse,
	Itrack,
	ItrackResponse,
	ICategoryProps,
	IFavoriteResponse,
} from '../../types/ITrack'
import {
	ISignBody,
	IUserResponse,
	ILogInBody,
	ITokens,
} from '../../types/IUserTypes'
import { baseQueryWithReauth } from '../baseQueryWithAuth'

export const tracksApi = createApi({
	reducerPath: 'tracksApi',
	tagTypes: ['Track', 'User'],
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({
		getAllTracks: builder.query<Itrack[], number>({
			query: () => 'catalog/track/all/',
			transformResponse: (response: ItrackResponse[], meta, arg): Itrack[] => {
				const result: Itrack[] = response.map(elem => {
					const obj = { isLiked: false }
					if (elem.stared_user.filter(item => item.id === arg).length) {
						obj.isLiked = true
					}

					return { ...elem, ...obj }
				})

				return result
			},
			transformErrorResponse: (error): FetchBaseQueryError => error,
			providesTags: ['Track', 'User'],
		}),

		getCategoryTracks: builder.query<Itrack[], ICategoryProps>({
			query: ({ categoryId }) => `catalog/selection/${categoryId}`,
			transformResponse: (response: ICategoryResponse, meta, arg): Itrack[] => {
				const array = response.items
				const result: Itrack[] = array.map(elem => {
					const obj = { isLiked: false }
					if (elem.stared_user.filter(item => item.id === arg.userID).length) {
						obj.isLiked = true
					}

					return { ...elem, ...obj }
				})

				return result
			},
			transformErrorResponse: (error): FetchBaseQueryError => error,
			providesTags: ['Track', 'User'],
		}),
		getFavoriteTracks: builder.query<Itrack[], void>({
			query: () => `catalog/track/favorite/all/`,
			transformResponse: (response: IFavoriteResponse[]): Itrack[] => {
				const result: Itrack[] = response.map(elem => {
					const obj = { isLiked: true }

					return { ...elem, ...obj }
				})

				return result
			},
			transformErrorResponse: (error): FetchBaseQueryError => error,
			providesTags: ['Track', 'User'],
		}),

		addLike: builder.mutation({
			query: ({ id }) => ({
				url: `catalog/track/${id}/favorite/`,
				method: 'POST',
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
			invalidatesTags: ['Track'],
		}),
		deleteLike: builder.mutation({
			query: ({ id }) => ({
				url: `catalog/track/${id}/favorite/`,
				method: 'DELETE',
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
			invalidatesTags: ['Track'],
		}),
		signUp: builder.mutation<IUserResponse, ISignBody>({
			query: body => ({
				url: 'user/signup/',
				method: 'POST',
				body,
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
			invalidatesTags: ['User'],
		}),
		logIn: builder.mutation<IUserResponse, ILogInBody>({
			query: body => ({
				url: 'user/login/',
				method: 'POST',
				body,
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
			invalidatesTags: ['User'],
		}),
		getTokens: builder.mutation<ITokens, ILogInBody>({
			query: body => ({
				url: 'user/token/',
				method: 'POST',
				body,
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
		}),
	}),
})

export const {
	useGetAllTracksQuery,
	useAddLikeMutation,
	useDeleteLikeMutation,
	useGetCategoryTracksQuery,
	useGetFavoriteTracksQuery,
	useSignUpMutation,
	useLogInMutation,
	useGetTokensMutation,
} = tracksApi
// https://skypro-music-api.skyeng.tech/catalog/track/<id>/favorite/
