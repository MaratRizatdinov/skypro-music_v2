/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import * as S from '../AuthPage/AuthPage.styles'
import {
	useLogInMutation,
	useGetTokensMutation,
} from '../../store/reducers/userApi'
import { useAppDispatch } from '../../store/hooks'
import { setUserData, setUserToken } from '../../store/reducers/trackSlice'

interface Iprops {
	setIsUser: any
}

export const LoginMode = ({ setIsUser }: Iprops) => {
	const [errorApi, setErrorApi] = useState<any>(null)
	const [logIn, { isLoading }] = useLogInMutation()
	const [getTokens] = useGetTokensMutation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({
		mode: 'onBlur',
	})

	const onSubmit = async (body: any) => {
		setErrorApi(null)

		await logIn(body)
			.unwrap()
			.then(response => {
				reset()
				dispatch(setUserData(response))
				setIsUser(true)
				localStorage.setItem('token', response.username)
				navigate('/')
				getTokens({ email: body.email, password: body.password })
					.unwrap()
					.then(response => {
						localStorage.setItem('token', response.refresh)
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
				if (status === 401) setErrorApi(data)
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
				{errorApi?.detail && <S.Error $apiErr='api'>{errorApi.detail}</S.Error>}

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
			</S.Inputs>

			<S.Buttons>
				<S.PrimaryButton
					type='submit'
					value={isLoading ? '...Идет вход' : 'Войти'}
					disabled={!isValid || isLoading}
				/>
				<Link to='/registration'>
					<S.SecondaryButton type='submit' value='Зарегистрироваться' />
				</Link>
			</S.Buttons>
		</form>
	)
}
