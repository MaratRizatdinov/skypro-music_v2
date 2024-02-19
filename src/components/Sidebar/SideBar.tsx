/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { UserBlock } from '../UserBlock/UserBlock'
import { SideBarItem } from '../SideBarItem/SideBarItem'
import * as S from './SideBar.style'
import { UserContext } from '../../contexts/userContext'

export const Sidebar = () => (
	<S.SideBar>
		<UserContext.Consumer>
			{userProps => (
				<UserBlock user={userProps.userName} setIsUser={userProps.setIsUser} />
			)}
		</UserContext.Consumer>
		<S.SideBarBlock>
			<S.SideBarList>
				<SideBarItem src='img/playlist01.png' alt="day's playlist" id={1} />
				<SideBarItem src='img/playlist02.png' alt="day's playlist" id={2} />
				<SideBarItem src='img/playlist03.png' alt="day's playlist" id={3} />
			</S.SideBarList>
		</S.SideBarBlock>
	</S.SideBar>
)
