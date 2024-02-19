import React from 'react'
import { PlaylistItem } from '../PlaylistItem/PlaylistItem'
import * as S from '../ContentBlock/ContentBlock.style'
import { INITARRAY } from '../../constants/initArray'
import { useGetTracksWithId } from '../../hooks/useGetTracksWithId'
import { Itrack } from '../../types/ITrack'

interface IProps {
	page?: string
	
}

export const TrackBlock = ({ page = 'main' }: IProps) => {
	const { data: playlist, isLoading, isError } = useGetTracksWithId()

	const getShowingList = (path: string) => {
		let showingList: Itrack[]|[]
		if (playlist) {
			if (path === 'favorites') {
				showingList = playlist.filter(track => (track.isLiked === true))
				return showingList
			}
			if (path === 'classic') {
				showingList = playlist.filter(track => (track.genre==="Классическая музыка"))
				return showingList
			}
			if (path === 'rock') {
				showingList = playlist.filter(track => (track.genre==="Рок музыка"))
				return showingList
			}
			if (path === 'elektro') {
				showingList = playlist.filter(track => (track.genre==="Электронная музыка"))
				return showingList
			}

			return playlist
		}
		return undefined
	}

	const showingList = getShowingList(page)

	if (isError|| !showingList) {
		return (
			<S.Playlist>
				<S.ErrorBlock>Не удалось загрузить плейлист, попробуйте позже</S.ErrorBlock>
			</S.Playlist>
		)
	}
	if (isLoading) {
		return (
			<S.Playlist>
				{INITARRAY.map(track => (
					<PlaylistItem key={track.id} track={track} isLoadingMode={isLoading} />
				))}
			</S.Playlist>
		)
	}
	if (showingList && showingList.length===0) {
		return (
			<S.Playlist>
				<S.ErrorBlock>В данном плейлисте отсутствуют треки</S.ErrorBlock>
			</S.Playlist>
		)
	}
	return (
		<S.Playlist>
			{showingList &&
				showingList.map(track => (
					<PlaylistItem key={track.id} track={track} isLoadingMode={isLoading} />
				))}
		</S.Playlist>
	)
}
