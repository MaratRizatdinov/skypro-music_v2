import React from 'react'
import * as S from '../PlayerControls/PlayerControls.style'
import { usePrevTrack } from '../../hooks/useTrackControls'

export const PrevButton = () => {
	const getPrevTrack = usePrevTrack()

	return (
		<S.PlayerButtonPrev onClick={getPrevTrack}>
			<S.PrevSVG>
				<use xlinkHref='/img/icon/sprite.svg#icon-prev' />
			</S.PrevSVG>
		</S.PlayerButtonPrev>
	)
}
