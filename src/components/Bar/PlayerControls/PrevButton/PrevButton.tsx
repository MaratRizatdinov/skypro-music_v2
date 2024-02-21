import React from 'react'
import * as S from '../PlayerControls.style'
import { useTracksControl } from '../../../../hooks/useTrackControls'

export const PrevButton = () => {
	const {getPrevTrack} = useTracksControl()

	return (
		<S.PlayerButtonPrev onClick={getPrevTrack}>
			<S.PrevSVG>
				<use xlinkHref='/img/icon/sprite.svg#icon-prev' />
			</S.PrevSVG>
		</S.PlayerButtonPrev>
	)
}
