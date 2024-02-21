/*
eslint no-unused-expressions: ["error", { "allowTernary": true }]
*/

import React, { Dispatch, SetStateAction } from 'react'
import { SelectFilter } from '../../../../../types/SelectFilter'
import * as S from '../FilterBlock.style'
import { PopupAuthors } from './PopupAuthors/PopupAuthors'
import { useAppSelector } from '../../../../../store/hooks'

interface IProps {
	open: SelectFilter
	setOpen: Dispatch<SetStateAction<SelectFilter>>
}

export const FilterByAuthor = ({ open, setOpen }: IProps) => {
	const select = useAppSelector(state => state.tracks.filterAuthors)

	const handleClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	): void => {
		event.stopPropagation()
		open !== 'Authors' ? setOpen('Authors') : setOpen('Close')
	}

	return (
		<S.FilterBlockAuthors>
			{select.length ? (
				<S.FilterCountAuthors>{select.length}</S.FilterCountAuthors>
			) : null}
			<S.FilterButton role='presentation' onClick={handleClick}>
				исполнителю
			</S.FilterButton>
			{open === 'Authors' && <PopupAuthors setOpen={setOpen} select={select} />}
		</S.FilterBlockAuthors>
	)
}
