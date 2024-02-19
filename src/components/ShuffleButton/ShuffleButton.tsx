/* eslint-disable no-unused-expressions */
import React from 'react'
import { useDispatch } from 'react-redux'
import * as S from '../PlayerControls/PlayerControls.style'
import { useAppSelector } from '../../store/hooks'
import {
	clearShuffle,
	setShuffleToState,
} from '../../store/reducers/trackSlice'
import { useGetTracksWithId } from '../../hooks/useGetTracksWithId'
import { INITARRAY } from '../../constants/initArray'


export const ShuffleButton = () => {
	const dispatch = useDispatch()	
	const {data:trackList} = useGetTracksWithId()
	const shuffleStatus = useAppSelector(state => state.tracks.shuffleList.status)

	const handleClick = () => {
		if (shuffleStatus) {
			dispatch(clearShuffle())
		} else {
			const shuffleTracks = trackList ? [...trackList].sort(() => Math.random() - 0.5) : INITARRAY
			dispatch(setShuffleToState(shuffleTracks))
		}
	}
	return (
		<S.PlayerButtonShuffle className='_btn-icon' onClick={handleClick}>
			<S.ShuffleSVG $active={shuffleStatus}>
				<use xlinkHref='/img/icon/sprite.svg#icon-shuffle' />
			</S.ShuffleSVG>
		</S.PlayerButtonShuffle>
	)
}
