import React, { Dispatch, SetStateAction } from 'react'

interface IProps {
	open: number
	setOpen: Dispatch<SetStateAction<number>>
}

export const FilterByGenre = ({ open, setOpen }: IProps) => (
	<>
    <div
		className='filter__button button-genre _btn-text'
		role='presentation'
		onClick={() => (open !== 3 ? setOpen(3) : setOpen(0))}
	>
		жанру
	</div>
    <div>{open ===3 && 'Фильтр по жанрам!!!'}</div></>
)
