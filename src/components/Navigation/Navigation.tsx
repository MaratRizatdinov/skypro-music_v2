import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from '../NavLink/NavLink'
import * as S from './Navigation.style'
import { UserContext } from '../../contexts/userContext'

export const Navigation = () => {
	const [visible, setVisible] = useState(true)
	const navigate = useNavigate()

	return (
		<S.NavigationBlock>
			<S.LogoContainer onClick={() => navigate('/')}>
				<S.LogoImage src='/img/logo.png' alt='logo' />
			</S.LogoContainer>
			<S.NavBurger role='presentation' onClick={() => setVisible(!visible)}>
				<S.BurgerLine />
				<S.BurgerLine />
				<S.BurgerLine />
			</S.NavBurger>
			<S.NavMenu>
				{visible && (
					<S.MenuList>
						<NavLink path='/'>Главное</NavLink>
						<NavLink path='/favorites'>Мой плейлист</NavLink>
						<UserContext.Consumer>
							{(userProps)=><NavLink path='/login' setIsUser={userProps.setIsUser}>Выйти</NavLink>}
						</UserContext.Consumer>
					</S.MenuList>
				)}
			</S.NavMenu>
		</S.NavigationBlock>
	)
}
