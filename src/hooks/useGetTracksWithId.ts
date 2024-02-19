import { useAppSelector } from '../store/hooks'
import {
	useGetAllTracksQuery,
	useGetCategoryTracksQuery,
} from '../store/reducers/tracksApi'

export const useGetTracksWithId = () => {
	const userID = useAppSelector(state => state.tracks.user?.id) as number
	const getTracksWithId = useGetAllTracksQuery(userID)

	return getTracksWithId
}

export const useGetCategoryTracksWithId = (id: string) => {
	const userID = useAppSelector(state => state.tracks.user?.id) as number
	const getCategoryTracksWithId = useGetCategoryTracksQuery({
		categoryId: id,
		userID,
	})

	return getCategoryTracksWithId
}
