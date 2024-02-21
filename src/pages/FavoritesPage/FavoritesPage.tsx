/* eslint-disable consistent-return */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TrackBlock } from '../../components/TrackBlock/TrackBlock'
import { useGetFavoriteTracksQuery } from '../../store/reducers/tracksApi'
import { useAppDispatch } from '../../store/hooks'
import { clearAllState, clearShuffle} from '../../store/reducers/trackSlice'

export const FavoritesPage = () => {	

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const {
		data: playlist,
		isLoading,
		isError,
	} = useGetFavoriteTracksQuery()

	if (isError) {		
			dispatch(clearAllState())				
			navigate('/login')					
	}
	useEffect(() => {
		dispatch(clearShuffle())
	}, [])

	return (
		<TrackBlock playlist={playlist} isLoading={isLoading}  />
	)
}
