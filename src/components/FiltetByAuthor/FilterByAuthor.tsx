/*
eslint no-unused-expressions: ["error", { "allowTernary": true }]
*/

import React, { Dispatch, SetStateAction } from 'react'
import { SelectFilter } from '../../types/SelectFilter'
import * as S from '../FilterBlock/FilterBlock.style'
import { PopupAuthors } from '../PopupAuthors/PopupAuthors'

interface IProps {
	open: SelectFilter
	setOpen: Dispatch<SetStateAction<SelectFilter>>
}

export const FilterByAuthor = ({ open, setOpen }: IProps) => {
	
	const handleClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	): void => {		
		event.stopPropagation()
		open !== 'Authors' ? setOpen('Authors') : setOpen('Close')
	}

	return (
		<S.FilterBlockAuthors>
			<S.FilterButton role='presentation' onClick={handleClick}>
				исполнителю
			</S.FilterButton>
			{open === 'Authors' && <PopupAuthors setOpen={setOpen} />}
		</S.FilterBlockAuthors>
	)
}
