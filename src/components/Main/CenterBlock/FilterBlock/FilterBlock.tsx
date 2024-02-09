import React, { useState } from 'react'
import { FilterByAuthor } from './FiltetByAuthor/FilterByAuthor'
import { FilterByYear } from './FilterByYear/FilterByYear'
import { FilterByGenre } from './FilterByGenre/FilterByGenre'

export const FilterBlock = () => {
	const [open, setOpen] = useState(0)
	return (
		<div className='centerblock__filter filter'>
			<div className='filter__title'>Искать по:</div>
			<FilterByAuthor open={open} setOpen={setOpen} />
			<FilterByYear open={open} setOpen={setOpen} />
			<FilterByGenre open={open} setOpen={setOpen} />
		</div>
	)
}
