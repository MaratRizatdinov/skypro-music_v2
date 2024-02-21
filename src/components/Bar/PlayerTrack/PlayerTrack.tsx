import React from 'react'
import * as S from './PlayerTrack.style'
import { Sceleton } from '../../Sceleton/Sceleton'
import { useGetTracksWithId } from '../../../hooks/useGetTracksWithId'
import { Itrack } from '../../../types/ITrack'
import { useLike } from '../../../hooks/useLike'

type Iprops = {
	track: Itrack
}

export const PlayerTrack = ({ track }: Iprops) => {
	const { data: playlist, isLoading: isLoadingMode } = useGetTracksWithId()
	const playingTrack = playlist?.filter(elem => elem.id === track.id)[0]
		? playlist?.filter(elem => elem.id === track.id)[0]
		: null
	const likeClick = useLike()

	return (
		<S.PlayerTrack>
			<S.TrackPlayContain>
				<S.TrackPlayImage>
					<S.TrackPlaySVG>
						<use xlinkHref='/img/icon/sprite.svg#icon-note' />
					</S.TrackPlaySVG>
				</S.TrackPlayImage>
				<Sceleton $width='49px' $height='15px' isLoadingMode={isLoadingMode}>
					<S.TrackPlayAuthor>{track.author}</S.TrackPlayAuthor>
				</Sceleton>
				<Sceleton $width='49px' $height='15px' isLoadingMode={isLoadingMode}>
					<S.TrackPlayAlbum>{track.album}</S.TrackPlayAlbum>
				</Sceleton>
			</S.TrackPlayContain>
			<S.TrackPlayLikeDiz>
				{playingTrack ? (
					<S.TrackPlayLike className='_btn-icon'>
						<S.TrackPlayLikeSVG
							onClick={event =>
								likeClick(event, playingTrack.id, playingTrack.isLiked)
							}
						>
							{playingTrack.isLiked ? (
								<use xlinkHref='/img/icon/sprite.svg#icon-likeclicked' />
							) : (
								<use xlinkHref='/img/icon/sprite.svg#icon-like' />
							)}
						</S.TrackPlayLikeSVG>
					</S.TrackPlayLike>
				) : null}
			</S.TrackPlayLikeDiz>
		</S.PlayerTrack>
	)
}
