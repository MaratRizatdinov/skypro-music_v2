import React from 'react'
import * as S from './Search.style'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { setSearchText } from '../../../../store/reducers/trackSlice'

export const Search = () => {
	const text = useAppSelector(state => state.tracks.searchText)
	const dispatch = useAppDispatch()

	return (
		<S.Search>
			<S.SearchSVG>
				<use xlinkHref='/img/icon/sprite.svg#icon-search' />
			</S.SearchSVG>
			<S.SearchInput
				type='search'
				placeholder='Поиск'
				name='search'
				value={text}
				onChange={event => dispatch(setSearchText(event.target.value))}
			/>
		</S.Search>
	)
}
