import React, { Dispatch, SetStateAction } from 'react'

interface IProps {
	open: number
	setOpen: Dispatch<SetStateAction<number>>
}

export const FilterByYear = ({ open, setOpen }: IProps) => (
	<>
		<div
			className='filter__button button-year _btn-text'
			role='presentation'
			onClick={() => (open !== 2 ? setOpen(2) : setOpen(0))}
		>
			году выпуска
		</div>
		<div>{open === 2 && 'Фильтр по годам!!!'}</div>
	</>
)
