import React, { Dispatch, SetStateAction } from 'react'

interface IProps {
	open: number
	setOpen: Dispatch<SetStateAction<number>>
}

export const FilterByAuthor = ({ open, setOpen }: IProps) => (
	<>
		<div
			className='filter__button button-author _btn-text'
			role='presentation'
			onClick={() => (open !== 1 ? setOpen(1) : setOpen(0))}
		>
			исполнителю
		</div>
		<div>{open ===1 && 'Фильтр по авторам!!!'}</div>
	</>
)
