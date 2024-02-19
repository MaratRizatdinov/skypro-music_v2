import React from 'react'
import * as S from '../PlayerControls/PlayerControls.style'
import { useNextTrack } from '../../hooks/useTrackControls'

export const NextButton = () => {
	const getNextTrack = useNextTrack('onclick')

	return (
		<S.PlayerButtonNext onClick={getNextTrack}>
			<S.NextSVG>
				<use xlinkHref='/img/icon/sprite.svg#icon-next' />
			</S.NextSVG>
		</S.PlayerButtonNext>
	)
}
