import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TrackBlock } from '../../components/TrackBlock/TrackBlock'
import { useGetTracksWithId } from '../../hooks/useGetTracksWithId'
import { useAppDispatch} from '../../store/hooks'
import { clearShuffle, clearAllState } from '../../store/reducers/trackSlice'
import { useFilters } from '../../hooks/useFilters'


export const FullPage = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { data: playlist, isLoading, isError } = useGetTracksWithId()		

	useEffect(() => {
		dispatch(clearShuffle())
	}, [])

	if (isError) {
		dispatch(clearAllState())
		navigate('/login')
	}
	const finalList =useFilters(playlist)
	
	return <TrackBlock playlist={finalList} isLoading={isLoading} />
}
