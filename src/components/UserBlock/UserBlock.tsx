import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './UserBlock.style'

interface Iprops {
	user: any
	setIsUser: any
}
export const UserBlock = ({ user, setIsUser }: Iprops) => {
	const navigate = useNavigate()
	return (
		<S.SideBarUser>
			<S.SideBarUserName>{user}</S.SideBarUserName>
			<S.SideBarIcon
				onClick={() => {
					setIsUser(false)
					localStorage.removeItem('token')
					navigate('/login')
				}}
			>
				<svg>
					<use xlinkHref='/img/icon/sprite.svg#logout' />
				</svg>
			</S.SideBarIcon>
		</S.SideBarUser>
	)
}
