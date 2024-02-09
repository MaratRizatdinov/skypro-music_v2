import React from 'react'
import { Search } from './Search/Search'
import { Title } from './Title/Title'
import { FilterBlock } from './FilterBlock/FilterBlock'
import { ContentBlock } from './ContentBlock/ContentBlock'
import { IsLoading } from '../../../types/interface'

export const CenterBlock = ({ isLoading }: IsLoading) => (
	<div className='main__centerblock centerblock'>
		<Search />
		<Title>Треки</Title>
		<FilterBlock />
		<ContentBlock isLoading={isLoading} />
	</div>
)
