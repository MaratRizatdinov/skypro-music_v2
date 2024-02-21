/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as S from '../AuthPage.styles'
import {
	useGetTokensMutation,
	useSignUpMutation,
} from '../../../store/reducers/tracksApi'
import { setUserData, setUserToken } from '../../../store/reducers/trackSlice'
import { useAppDispatch } from '../../../store/hooks'

interface Iprops {
	setIsUser: any
}

export default function RegistrationMode({ setIsUser }: Iprops) {
	const [signUp, { isLoading }] = useSignUpMutation()
	const [getTokens] = useGetTokensMutation()
	const dispatch = useAppDispatch()

	const [errorApi, setErrorApi] = useState<any>(null)
	const navigate = useNavigate()
	const {
		register,
		getValues,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	})

	const onSubmit = async (data: any) => {
		setErrorApi(null)
		const { repeat, ...body } = data

		await signUp(body)
			.unwrap()
			.then(response => {
				reset()
				setIsUser(true)
				dispatch(setUserData(response))
				localStorage.setItem('token', response.username)
				navigate('/')
				getTokens({ email: body.email, password: body.password })
					.unwrap()
					.then(response => {
						localStorage.setItem('refresh', response.refresh)
						dispatch(setUserToken(response.access))
					})
					.catch(error => {
						const { status, data } = error
						if (status === 400) setErrorApi(data)
						if (status === 401)
							setErrorApi({
								username: ['Пользователь с таким email или паролем не найден'],
							})
						if (status === 500) setErrorApi({ username: ['Сервер сломался'] })
					})
			})
			.catch(error => {
				const { status, data } = error
				if (status === 400) setErrorApi(data)
				if (status === 500) setErrorApi({ username: ['Сервер сломался'] })
			})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<S.Inputs>
				<S.ModalInput
					type='text'
					placeholder='Логин'
					{...register('email', {
						required: 'Поле Email обязательно к заполнению',
						minLength: {
							value: 3,
							message: 'Минимальная длина - 3 символа',
						},
					})}
				/>
				{errors?.email && (
					<S.Error>{errors?.email?.message?.toString() || 'Error!'}</S.Error>
				)}
				{errorApi?.email && <S.Error $apiErr='api'>{errorApi.email}</S.Error>}

				<S.ModalInput
					type='text'
					placeholder='Пользователь'
					{...register('username', {
						required: 'Поле User обязательно к заполнению',
						minLength: {
							value: 3,
							message: 'Минимальная длина - 3 символа',
						},
					})}
				/>
				{errors?.username && (
					<S.Error>{errors?.username?.message?.toString() || 'Error!'}</S.Error>
				)}
				{errorApi?.username && <S.Error $apiErr='api'>{errorApi.username}</S.Error>}

				<S.ModalInput
					type='password'
					placeholder='Пароль'
					{...register('password', {
						required: 'Поле Пароль обязательно к заполнению',
						minLength: {
							value: 5,
							message: 'Минимальная длина - 5 символов',
						},
					})}
				/>
				{errors?.password && (
					<S.Error>{errors?.password?.message?.toString() || 'Error!'}</S.Error>
				)}
				{errorApi?.password && <S.Error $apiErr='api'>{errorApi.password}</S.Error>}

				<S.ModalInput
					type='password'
					placeholder='Повторите пароль'
					{...register('repeat', {
						required: 'Повторите пароль',
						minLength: {
							value: 5,
							message: 'Минимальная длина - 5 символов',
						},
						validate: {
							isEqual: value =>
								value === getValues('password') || 'Повторный пароль не совпадает!',
						},
					})}
				/>
				{errors?.repeat && (
					<S.Error>{errors?.repeat?.message?.toString() || 'Error!'}</S.Error>
				)}
			</S.Inputs>

			<S.Buttons>
				<S.PrimaryButton
					type='submit'
					value={isLoading ? '...Идет регистрация' : 'Зарегистрироваться'}
					disabled={!isValid || isLoading}
				/>
			</S.Buttons>
		</form>
	)
}
