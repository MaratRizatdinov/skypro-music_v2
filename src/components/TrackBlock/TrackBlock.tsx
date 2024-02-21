import React from 'react'
import { PlaylistItem } from './PlaylistItem/PlaylistItem'
import * as S from '../Main/CenterBlock/ContentBlock/ContentBlock.style'
import { INITARRAY } from '../../constants/initArray'
import { Itrack } from '../../types/ITrack'
import { useAppSelector } from '../../store/hooks'

interface IProps {
	playlist: Itrack[] | undefined
	isLoading: boolean
}

export const TrackBlock = ({ playlist, isLoading }: IProps) => {
	const searchText = useAppSelector(state => state.tracks.searchText)

	if (isLoading) {
		return (
			<S.Playlist>
				{INITARRAY.map((track, _, list) => (
					<PlaylistItem
						key={track.id}
						track={track}
						isLoadingMode={isLoading}
						list={list}
					/>
				))}
			</S.Playlist>
		)
	}

	if (!playlist) {
		return (
			<S.Playlist>
				<S.ErrorBlock>Не удалось загрузить плейлист, попробуйте позже</S.ErrorBlock>
			</S.Playlist>
		)
	}

	const searchingList = playlist.filter(
		elem =>
			elem.author.toLocaleLowerCase().includes(searchText) ||
			elem.album.toLocaleLowerCase().includes(searchText),
	)

	if (searchingList.length === 0) {
		return (
			<S.Playlist>
				<S.ErrorBlock>В данном плейлисте отсутствуют треки</S.ErrorBlock>
			</S.Playlist>
		)
	}

	return (
		<S.Playlist>
			{searchingList.map((track, _, list) => (
				<PlaylistItem
					key={track.id}
					track={track}
					isLoadingMode={isLoading}
					list={list}
				/>
			))}
		</S.Playlist>
	)
}
