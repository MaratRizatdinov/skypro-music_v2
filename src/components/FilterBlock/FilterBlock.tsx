import React, { useState } from 'react'
import { FilterByAuthor } from '../FiltetByAuthor/FilterByAuthor'
import { FilterByYear } from '../FilterByYear/FilterByYear'
import { FilterByGenre } from '../FilterByGenre/FilterByGenre'
import { SelectFilter } from '../../types/SelectFilter'
import * as S from './FilterBlock.style'

export const FilterBlock = () => {
	const [open, setOpen] = useState<SelectFilter>('Close')

	return (
		<S.FilterBlock>
			<S.FilterTitle>Искать по:</S.FilterTitle>
			<FilterByAuthor open={open} setOpen={setOpen} />
			<FilterByYear open={open} setOpen={setOpen} />
			<FilterByGenre open={open} setOpen={setOpen} />
		</S.FilterBlock>
	)
}
