import {
	FetchBaseQueryError,
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { ISignBody, IUserResponse, ILogInBody,ITokens } from '../../types/IUserTypes'


export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://skypro-music-api.skyeng.tech/user/',
	}),
	endpoints: builder => ({
		signUp: builder.mutation<IUserResponse, ISignBody>({
			query: body => ({
				url: 'signup/',
				method: 'POST',
				body,
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
		}),
		logIn: builder.mutation<IUserResponse, ILogInBody>({
			query:body=>({
				url:'login/',
				method: 'POST',
				body,
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
		}),
		getTokens: builder.mutation<ITokens,ILogInBody>({
			query: body=>({
				url:'token/',
				method: 'POST',
				body,
			}),
			transformErrorResponse: (error): FetchBaseQueryError => error,
		})
	}),
})

export const { useSignUpMutation, useLogInMutation, useGetTokensMutation } = userApi







