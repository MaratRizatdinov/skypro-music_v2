/* eslint-disable no-unused-expressions */

import React, { Dispatch, SetStateAction } from 'react'
import { SelectFilter } from '../../../../../types/SelectFilter'
import * as S from '../FilterBlock.style'
import { useAppSelector } from '../../../../../store/hooks'
import { Isort } from '../../../../../types/IUserTypes'
import { PopupYear } from './PopupYear/PopupYear'

interface IProps {
	open: SelectFilter
	setOpen: Dispatch<SetStateAction<SelectFilter>>
}

export const FilterByYear = ({ open, setOpen }: IProps) => {
	const select = useAppSelector(state => state.tracks.sortType)

	const handleClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	): void => {
		event.stopPropagation()
		open !== 'Year' ? setOpen('Year') : setOpen('Close')
	}

	const showSelect = (str: Isort) => {
		if (str === 'По возрастанию')
			return <S.FilterCountYear>{String.fromCodePoint(8595)}</S.FilterCountYear>
		if (str === 'По убыванию')
			return <S.FilterCountYear>{String.fromCodePoint(8593)}</S.FilterCountYear>
		return null
	}
	const tablo = showSelect(select)

	return (
		<S.FilterBlockYear>
			{tablo}
			<S.FilterButtonYear role='presentation' onClick={handleClick}>
				{select}
			</S.FilterButtonYear>
			{open === 'Year' && <PopupYear setOpen={setOpen} select={select} />}
		</S.FilterBlockYear>
	)
}
