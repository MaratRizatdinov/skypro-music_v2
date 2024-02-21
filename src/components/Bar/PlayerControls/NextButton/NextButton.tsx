import React from 'react'
import * as S from '../PlayerControls.style'
import { useTracksControl } from '../../../../hooks/useTrackControls'

export const NextButton = () => {
	 const {getNextTrack} = useTracksControl()	

	return (
		<S.PlayerButtonNext onClick={()=>getNextTrack('onclick')}>
			<S.NextSVG>
				<use xlinkHref='/img/icon/sprite.svg#icon-next' />
			</S.NextSVG>
		</S.PlayerButtonNext>
	)
}
