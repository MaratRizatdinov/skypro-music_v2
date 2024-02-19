import React from 'react'
import { Search } from '../Search/Search'
import { Title } from '../Title/Title'
import { FilterBlock } from '../FilterBlock/FilterBlock'
import { ContentBlock } from '../ContentBlock/ContentBlock'
import * as S from './CenterBlock.style'

export const CenterBlock = () => (
	<S.CenterBlock>
		<Search />
		<Title/>
		<FilterBlock />
		<ContentBlock />
	</S.CenterBlock>
)
