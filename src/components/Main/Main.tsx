import React from 'react'
import { Navigation } from './Navigation/Navigation'
import { CenterBlock } from './CenterBlock/CenterBlock'
import { Sidebar } from './Sidebar/SideBar'
import * as S from './Main.style'

export const Main = () => (
	<S.Main>
		<Navigation />
		<CenterBlock />
		<Sidebar />
	</S.Main>
)
