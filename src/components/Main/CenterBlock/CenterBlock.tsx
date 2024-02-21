import React from 'react'
import { useLocation } from 'react-router-dom'
import { Search } from './Search/Search'
import { Title } from './Title/Title'
import { FilterBlock } from './FilterBlock/FilterBlock'
import { ContentBlock } from './ContentBlock/ContentBlock'
import * as S from './CenterBlock.style'

export const CenterBlock = () => {
	const location = useLocation().pathname

	return (
		<S.CenterBlock>
			<Search />
			<Title />
			{location === '/' ? <FilterBlock /> : null}
			<ContentBlock />
		</S.CenterBlock>
	)
}
