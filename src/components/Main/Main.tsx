import React from 'react'
import { Navigation } from './Navigation/Navigation'
import { CenterBlock } from './CenterBlock/CenterBlock'
import { Sidebar } from './Sidebar/SideBar'
import { IsLoading } from '../../types/interface'

export const Main = ({ isLoading }: IsLoading) => (
	<main className='main'>
		<Navigation />
		<CenterBlock isLoading={isLoading} />
		<Sidebar />
	</main>
)
