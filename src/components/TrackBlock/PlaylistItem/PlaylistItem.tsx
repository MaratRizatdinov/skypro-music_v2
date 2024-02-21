/* eslint-disable no-unused-expressions */
import React from 'react'
import { useDispatch } from 'react-redux'
import * as S from './PlaylistItem.style'
import { Sceleton } from '../../Sceleton/Sceleton'
import { createTimeString } from '../../../scripts/createTimeString'
import {
	playTrack,
	setCurrentList,
	setCurrentTrack,
} from '../../../store/reducers/trackSlice'
import { IInit, Itrack } from '../../../types/ITrack'
import { useAppSelector } from '../../../store/hooks'
import { TrackTitleImage } from '../../TrackTitleImage/TrackTitleImage'
import { useLike } from '../../../hooks/useLike'

interface IProps {
	track: Itrack | IInit
	isLoadingMode: boolean
	list: Itrack[] | IInit[]
}

export const PlaylistItem = ({ track, isLoadingMode, list }: IProps) => {
	
	const dispatch = useDispatch()
	const isPlaying = useAppSelector(state => state.tracks.isPlaying)	
	const likeClick =useLike()
	const selectTrackClick = () => {
		dispatch(setCurrentTrack(track))
		dispatch(setCurrentList(list))
		if (!isPlaying) dispatch(playTrack())
	}

	return (
		<S.Item onClick={selectTrackClick}>
			<S.Track>
				<S.TrackTitle>
					<TrackTitleImage track={track} />
					<Sceleton $width='300px' $height='15px' isLoadingMode={isLoadingMode}>
						<S.TrackText>{track.name}</S.TrackText>
					</Sceleton>
				</S.TrackTitle>
				<Sceleton $width='300px' $height='15px' isLoadingMode={isLoadingMode}>
					<S.TrackAuthor>{track.author}</S.TrackAuthor>
				</Sceleton>

				<Sceleton $width='245px' $height='15px' isLoadingMode={isLoadingMode}>
					<S.TrackAlbum>{track.album}</S.TrackAlbum>
				</Sceleton>
				<div>
					<S.TrackTimeSVG onClick={e => likeClick(e, track.id, track.isLiked)}>
						{track.isLiked ? (
							<use xlinkHref='/img/icon/sprite.svg#icon-likeclicked' />
						) : (
							<use xlinkHref='/img/icon/sprite.svg#icon-like' />
						)}
					</S.TrackTimeSVG>
					<S.TrackTimeText>
						{createTimeString(track.duration_in_seconds)}
					</S.TrackTimeText>
				</div>
			</S.Track>
		</S.Item>
	)
}
