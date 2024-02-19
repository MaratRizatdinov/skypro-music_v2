import React, { Dispatch, SetStateAction } from 'react'
import { SelectFilter } from '../../types/SelectFilter'
import * as S from '../FilterBlock/FilterBlock.style'

interface IProps {
	open: SelectFilter
	setOpen: Dispatch<SetStateAction<SelectFilter>>
}

export const FilterByGenre = ({ open, setOpen }: IProps) => (
	<>
		<S.FilterButton
			role='presentation'
			onClick={() => (open !== 'Genre' ? setOpen('Genre') : setOpen('Close'))}
		>
			жанру
		</S.FilterButton>
		<div>{open === 'Genre' && 'Фильтр по жанрам!!!'}</div>
	</>
)
