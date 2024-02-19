import React from 'react'
import { TrackBlock } from '../../components/TrackBlock/TrackBlock'
import { useGetTracksWithId } from '../../hooks/useGetTracksWithId'
import { useAppDispatch } from '../../store/hooks'
import { clearShuffle } from '../../store/reducers/trackSlice'

export const FullPage = () => {
	const dispatch=useAppDispatch()
	dispatch(clearShuffle())
	const { data: playlist, isLoading, isError } = useGetTracksWithId()
	return (
		<TrackBlock playlist={playlist} isLoading={isLoading} isError={isError} />
	)
}
