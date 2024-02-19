/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from '../PlayerControls/PlayerControls.style'
import { useAppSelector } from '../../store/hooks'
import { toggleLoop } from '../../store/reducers/trackSlice'

type Iprop = {
	audioRef: React.RefObject<HTMLAudioElement>
}

export const RepeatButton = ({ audioRef }: Iprop) => {
	const dispatch = useDispatch()
	const isLoop = useAppSelector(state => state.tracks.isLoop)

	useEffect(() => {
		const audio = audioRef.current as HTMLAudioElement
		isLoop ? (audio.loop = true) : (audio.loop = false)
	}, [isLoop])

	return (
		<S.PlayerButtonRepeat
			className='_btn-icon'
			onClick={() => {
				dispatch(toggleLoop())
			}}
		>
			<S.RepeatSVG $active={isLoop}>
				<use xlinkHref='/img/icon/sprite.svg#icon-repeat' />
			</S.RepeatSVG>
		</S.PlayerButtonRepeat>
	)
}
