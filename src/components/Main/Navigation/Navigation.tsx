import React, { useState } from 'react'
import { NavLink } from './NavLink/NavLink'

export const Navigation = () => {
	
	const [visible, setVisible] = useState(true)

	return (
		<nav className='main__nav nav'>
			<div className='nav__logo logo'>
				<img className='logo__image' src='/img/logo.png' alt='logo' />
			</div>
			<div
				className='nav__burger burger'
				role='presentation'
				onClick={() => setVisible(!visible)}
			>
				<span className='burger__line' />
				<span className='burger__line' />
				<span className='burger__line' />
			</div>
			<div className='nav__menu menu'>
				{visible && (
					<ul className='menu__list'>
						<NavLink>Главное</NavLink>
						<NavLink>Мой плейлист</NavLink>
						<NavLink>Войти</NavLink>
					</ul>
				)}
			</div>
		</nav>
	)
}
