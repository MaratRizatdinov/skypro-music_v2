/* eslint-disable no-unused-expressions */
import React, { Dispatch, SetStateAction } from 'react'
import { SelectFilter } from '../../../../../types/SelectFilter'
import * as S from '../FilterBlock.style'
import { PopupGenre } from './PopupGenre/PopupGenre'
import { useAppSelector } from '../../../../../store/hooks'

interface IProps {
	open: SelectFilter
	setOpen: Dispatch<SetStateAction<SelectFilter>>
}

export const FilterByGenre = ({ open, setOpen }: IProps) => {
	const select = useAppSelector(state => state.tracks.filterGenre)
	const handleClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	): void => {
		event.stopPropagation()
		open !== 'Genre' ? setOpen('Genre') : setOpen('Close')
	}
	return (
		<S.FilterBlockGenre>
			{select.length ? (
				<S.FilterCountGenre>{select.length}</S.FilterCountGenre>
			) : null}
			<S.FilterButton role='presentation' onClick={handleClick}>
				жанру
			</S.FilterButton>
			{open === 'Genre' && <PopupGenre setOpen={setOpen} select={select} />}
		</S.FilterBlockGenre>
	)
}
