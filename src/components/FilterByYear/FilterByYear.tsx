import React, { Dispatch, SetStateAction } from 'react'
import { SelectFilter } from '../../types/SelectFilter'
import * as S from '../FilterBlock/FilterBlock.style'

interface IProps {
	open: SelectFilter
	setOpen: Dispatch<SetStateAction<SelectFilter>>
}

export const FilterByYear = ({ open, setOpen }: IProps) => (
	<>
		<S.FilterButton
			role='presentation'
			onClick={() => (open !== 'Year' ? setOpen('Year') : setOpen('Close'))}
		>
			году выпуска
		</S.FilterButton>
		<div>{open === 'Year' && 'Фильтр по годам!!!'}</div>
	</>
)
