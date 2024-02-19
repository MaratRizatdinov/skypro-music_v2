import React from 'react'
import * as S from './TrackTitleImage.style'
import { useAppSelector } from '../../store/hooks'
import { IInit, Itrack } from '../../types/ITrack'

interface IProps {
	track: Itrack | IInit}

export const TrackTitleImage = ({ track }: IProps) => {

	const currentTrack = useAppSelector(s => s.tracks.currentTrack)
	const isPlaying =useAppSelector(state=> state.tracks.isPlaying)
	

	const getImageByConditions = () => {
		if (currentTrack && currentTrack.id === track.id) {
			return (
				<S.TrackTitleSvgActive $isPlaying ={isPlaying}>
					<use xlinkHref='/img/icon/sprite.svg#icon-colorcircle' />
				</S.TrackTitleSvgActive>
			)
		}
		return (
			<S.TrackTitleSVG>
				<use xlinkHref='/img/icon/sprite.svg#icon-note' />
			</S.TrackTitleSVG>
		)
	}

	return <S.TrackTitleImg>{getImageByConditions()}</S.TrackTitleImg>
}

