import React from 'react'
import { useParams } from 'react-router-dom'
import { TrackBlock } from '../../components/TrackBlock/TrackBlock'
import { useGetCategoryTracksWithId } from '../../hooks/useGetTracksWithId'
import { useAppDispatch } from '../../store/hooks'
import { clearShuffle } from '../../store/reducers/trackSlice'

export const CategoriesPage = () => {
	const dispatch = useAppDispatch()
	dispatch(clearShuffle())
	const params = useParams().id || ''
	const {
		data: playlist,
		isLoading,
		isError,
	} = useGetCategoryTracksWithId(params)

	return (
		<TrackBlock playlist={playlist} isLoading={isLoading} isError={isError} />
	)
}
