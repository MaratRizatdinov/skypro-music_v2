import React from 'react'
import * as S from './ProgressBar.style'

interface Iprops {
	currentTime: number	
	duration: number
	audioRef: any
}

export const ProgressBar = ({
	currentTime,	
	duration,
	audioRef,
}: Iprops) => {
	const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		const audio = audioRef.current		
		audio.currentTime = Number(event.target.value)
	}

	return (
		<S.ProgressInput
			type='range'
			min={0}
			max={duration}
			value={currentTime}
			step={0.01}
			onChange={event => handleClick(event)}
			$color='#b672ff'
		/>
	)
}
// React.ChangeEvent<HTMLInputElement>
