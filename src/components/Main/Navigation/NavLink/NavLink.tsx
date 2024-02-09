/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { LinkProps } from '../../../../types/interface'

export const NavLink = ({ children }: LinkProps) => (
	<li className='menu__item'>
		<a href='#' className='menu__link'>
			{children}
		</a>
	</li>
)
