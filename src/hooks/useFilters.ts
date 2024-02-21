import { Itrack } from '../types/ITrack'
import { useAppSelector } from '../store/hooks'

export const useFilters = (playlist: Itrack[] | undefined) => {
    
	const selectAuthors = useAppSelector(state => state.tracks.filterAuthors)
	const selectGenre = useAppSelector(state => state.tracks.filterGenre)
	const sortType = useAppSelector(state => state.tracks.sortType)

	const filterByAuthor = (list: Itrack[] | undefined) => {
		if (selectAuthors.length && list) {
			return list.filter(elem => selectAuthors.includes(elem.author))
		}
		return list
	}

	const filterByGenre = (list: Itrack[] | undefined) => {
		if (selectGenre.length && list) {
			return list.filter(elem => selectGenre.includes(elem.genre))
		}
		return list
	}

	const sortByYear = (list: Itrack[] | undefined) => {
		let sortList: Itrack[]
		if (list && sortType === 'По возрастанию') {
			sortList = [...list].sort((a, b) =>
				a.release_date > b.release_date ? -1 : 1,
			)
			return sortList
		}
		if (list && sortType === 'По убыванию') {
			sortList = [...list].sort((a, b) =>
				a.release_date < b.release_date ? -1 : 1,
			)
			return sortList
		}
		return list
	}
	
	const firstList = filterByAuthor(playlist)
	const secondList = filterByGenre(firstList)
	const finalList = sortByYear(secondList)

	return finalList
}
