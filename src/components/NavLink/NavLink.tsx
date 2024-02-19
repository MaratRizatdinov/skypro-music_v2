/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './Navlink.style'

interface LinkProps {
	children: string
	path: string
	setIsUser?: any
}

export const NavLink = ({ children, path, setIsUser }: LinkProps) => {
	const navigate = useNavigate()
	const handleClick = () => {
		if (setIsUser) {
			setIsUser(false)
			localStorage.removeItem('token')
		}
		navigate(path)
	}

	return (
		<S.MenuItem onClick={handleClick}>
			<S.MenuLink>{children}</S.MenuLink>
		</S.MenuItem>
	)
}
