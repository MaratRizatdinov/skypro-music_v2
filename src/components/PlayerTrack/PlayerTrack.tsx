import React from 'react'
import * as S from './PlayerTrack.style'
import { Sceleton } from '../Sceleton/Sceleton.style'
import { useGetTracksWithId } from '../../hooks/useGetTracksWithId'

type Iprops = {	
	track: any
}

export const PlayerTrack = ({  track }: Iprops) => {
	
	const {isLoading:isLoadingMode} =useGetTracksWithId()
	
	return (
		<S.PlayerTrack>
			<S.TrackPlayContain>
				<S.TrackPlayImage>
					<S.TrackPlaySVG>
						<use xlinkHref='img/icon/sprite.svg#icon-note' />
					</S.TrackPlaySVG>
				</S.TrackPlayImage>
				{isLoadingMode ? (
					<Sceleton $width='49px' $height='15px' />
				) : (
					<S.TrackPlayAuthor>{track.author}</S.TrackPlayAuthor>
				)}
				{isLoadingMode ? (
					<Sceleton $width='49px' $height='15px' />
				) : (
					<S.TrackPlayAlbum>{track.album}</S.TrackPlayAlbum>
				)}
			</S.TrackPlayContain>
			<S.TrackPlayLikeDiz>
				<S.TrackPlayLike className='_btn-icon'>
					<S.TrackPlayLikeSVG>
						<use xlinkHref='/img/icon/sprite.svg#icon-like' />
					</S.TrackPlayLikeSVG>
				</S.TrackPlayLike>
				<S.TrackPlayDiz className='_btn-icon'>
					<S.TrackPlayDizSVG>
						<use xlinkHref='/img/icon/sprite.svg#icon-dislike' />
					</S.TrackPlayDizSVG>
				</S.TrackPlayDiz>
			</S.TrackPlayLikeDiz>
		</S.PlayerTrack>
	)
}
