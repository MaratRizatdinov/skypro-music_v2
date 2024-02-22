import React from 'react'
import * as S from './PlaylistItem.style'
import { Sceleton } from '../../Sceleton/Sceleton'
import { createTimeString } from '../../../scripts/createTimeString'
import { IInit, Itrack } from '../../../types/ITrack'
import { TrackTitleImage } from '../../TrackTitleImage/TrackTitleImage'
import { useLike } from '../../../hooks/useLike'
import { useGetCurrentTrack } from '../../../hooks/useGetCurrentTrack'

interface IProps {
	track: Itrack | IInit
	isLoadingMode: boolean
	list: Itrack[] | IInit[]
}

export const PlaylistItem = ({ track, isLoadingMode, list }: IProps) => {
	const likeClick =useLike()
	const selectTrackClick =useGetCurrentTrack({track,list})

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
