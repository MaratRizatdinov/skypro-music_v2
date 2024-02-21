/* eslint-disable no-unused-expressions */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
	useAddLikeMutation,
	useDeleteLikeMutation,
} from '../store/reducers/tracksApi'
import { clearAllState } from '../store/reducers/trackSlice'
import { useAppDispatch } from '../store/hooks'

export const useLike = () => {
    const [addLike] = useAddLikeMutation()
    const [deleteLike] = useDeleteLikeMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

	const likeClick = (
		event: React.MouseEvent<SVGSVGElement, MouseEvent>,
		id: number,
		isLiked: boolean,
	) => {

		event.stopPropagation()
		isLiked
			? deleteLike({ id })
					.unwrap()
					.catch(() => {
						dispatch(clearAllState())
						navigate('/login')
					})
			: addLike({ id })
					.unwrap()
					.catch(() => {
						dispatch(clearAllState())
						navigate('/login')
					})
	}
	return likeClick
}
