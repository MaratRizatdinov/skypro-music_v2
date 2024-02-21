/* eslint-disable no-unused-expressions */
import React from 'react'
import { useDispatch } from 'react-redux'
import * as S from '../PlayerControls.style'
import { useAppSelector } from '../../../../store/hooks'
import { pauseTrack, playTrack } from '../../../../store/reducers/trackSlice'

export const PlayButton = () => {
	const dispatch = useDispatch()
	const isPlaying = useAppSelector(state => state.tracks.isPlaying)

	const handleClick = () => {
		if (isPlaying) {
			dispatch(pauseTrack())
		} else {
			dispatch(playTrack())
		}
	}

	return (
		<S.PlayerButtonPlay className='_btn' onClick={handleClick}>
			<S.PlaySVG>
				{isPlaying ? (
					<use xlinkHref='/img/icon/sprite.svg#icon-pause' />
				) : (
					<use xlinkHref='/img/icon/sprite.svg#icon-play' />
				)}
			</S.PlaySVG>
		</S.PlayerButtonPlay>
	)
}
