import React from 'react'
import * as S from './PlayerControls.style'
import { PlayButton } from './PlayButton/PlayButton'
import { RepeatButton } from './RepeatButton/RepeatButton'
import { NextButton } from './NextButton/NextButton'
import { PrevButton } from './PrevButton/PrevButton'
import { ShuffleButton } from './ShuffleButton/ShuffleButton'

type Iprops = {
	audioRef: React.RefObject<HTMLAudioElement>
}

export const PlayerControls = ({ audioRef }: Iprops) => (
	<S.PlayerControls>
		<PrevButton />
		<PlayButton />
		<NextButton />
		<RepeatButton audioRef={audioRef} />
		<ShuffleButton />
	</S.PlayerControls>
)
