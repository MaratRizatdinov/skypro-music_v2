/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './Navlink.style'
import { useAppDispatch } from '../../../../store/hooks'
import { clearAllState } from '../../../../store/reducers/trackSlice'

interface LinkProps {
	children: string
	path: string
	setIsUser?: any
}

export const NavLink = ({ children, path, setIsUser }: LinkProps) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const handleClick = () => {
		if (setIsUser) {
			setIsUser(false)
			localStorage.removeItem('token')
			dispatch(clearAllState())
		}
		navigate(path)
	}

	return (
		<S.MenuItem onClick={handleClick}>
			<S.MenuLink>{children}</S.MenuLink>
		</S.MenuItem>
	)
}
