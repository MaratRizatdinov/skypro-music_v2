import React from 'react'
import { TrackBlock } from '../../components/TrackBlock/TrackBlock'
import { useGetFavoriteTracksQuery } from '../../store/reducers/tracksApi'
import { useAppDispatch } from '../../store/hooks'
import { clearShuffle } from '../../store/reducers/trackSlice'

export const FavoritesPage = () => {
	const dispatch=useAppDispatch()	
	const { data: playlist, isLoading, isError } = useGetFavoriteTracksQuery()
	dispatch(clearShuffle())
	return (
		<TrackBlock playlist={playlist} isLoading={isLoading} isError={isError} />
	)
}
