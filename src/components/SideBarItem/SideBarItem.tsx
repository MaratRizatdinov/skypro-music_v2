/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './SideBarItem.style'
import { useGetTracksWithId } from '../../hooks/useGetTracksWithId'

export interface ISideBarItem {
	src: string
	alt: string
	id: number
}

export const SideBarItem = ({ src, alt, id }: ISideBarItem) => {
	const { isLoading: isLoadingMode } = useGetTracksWithId()
	const navigate = useNavigate()

	return (
		<S.SideBarItem onClick={() => navigate(`/categories/${id}`)}>
			{!isLoadingMode && (
				<S.SideBarLink>
					<S.SideBarImg src={src} alt={alt} />
				</S.SideBarLink>
			)}
		</S.SideBarItem>
	)
}
