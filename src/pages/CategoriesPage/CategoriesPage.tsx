import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TrackBlock } from '../../components/TrackBlock/TrackBlock'
import { useGetCategoryTracksWithId } from '../../hooks/useGetTracksWithId'
import { useAppDispatch } from '../../store/hooks'
import { clearShuffle } from '../../store/reducers/trackSlice'

export const CategoriesPage = () => {
	const dispatch = useAppDispatch()

	const params = useParams().id || ''
	const {
		data: playlist,
		isLoading,		
	} = useGetCategoryTracksWithId(params)
	useEffect(() => {
		dispatch(clearShuffle())
	}, [params])

	return (
		<TrackBlock playlist={playlist} isLoading={isLoading}  />
	)
}
