import React from 'react'
import * as S from './Search.style'

export const Search = () => (
	<S.Search>
		<S.SearchSVG>
			<use xlinkHref='/img/icon/sprite.svg#icon-search' />
		</S.SearchSVG>
		<S.SearchInput			
			type='search'
			placeholder='Поиск'
			name='search'
		/>
	</S.Search>
)
