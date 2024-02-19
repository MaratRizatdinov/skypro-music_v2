import React from 'react'
import { PlaylistItem } from '../PlaylistItem/PlaylistItem'
import * as S from '../ContentBlock/ContentBlock.style'
import { INITARRAY } from '../../constants/initArray'
import { Itrack } from '../../types/ITrack'

interface IProps {
	playlist: Itrack[] | undefined
	isLoading: boolean
	isError: boolean
}

export const TrackBlock = ({ playlist, isLoading, isError }: IProps) => {
	if (isError || !playlist) {
		return (
			<S.Playlist>
				<S.ErrorBlock>Не удалось загрузить плейлист, попробуйте позже</S.ErrorBlock>
			</S.Playlist>
		)
	}
	if (isLoading) {
		return (
			<S.Playlist>
				{INITARRAY.map((track,_,list) => (
					<PlaylistItem key={track.id} track={track} isLoadingMode={isLoading} list={list} />
				))}
			</S.Playlist>
		)
	}
	if (playlist && playlist.length === 0) {
		return (
			<S.Playlist>
				<S.ErrorBlock>В данном плейлисте отсутствуют треки</S.ErrorBlock>
			</S.Playlist>
		)
	}
	return (
		<S.Playlist>
			{playlist.map((track,_,list) => (
				<PlaylistItem key={track.id} track={track} isLoadingMode={isLoading} list={list} />
			))}
		</S.Playlist>
	)
}
