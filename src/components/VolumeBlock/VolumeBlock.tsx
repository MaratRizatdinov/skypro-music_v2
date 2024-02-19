import React, { useState } from 'react'
import * as S from './VolumeBlock.style'

interface Iprops {
	audioRef: React.RefObject<HTMLAudioElement>
}

export const VolumeBlock = ({ audioRef }: Iprops) => {
	const [volume, setVolume] = useState(0.2)
	const audio = audioRef.current

	const handleVolumeChange = (newVolume: number) => {
		if (audio) {
			setVolume(newVolume)
			audio.volume = newVolume
		}
	}

	return (
		<S.VolumeBlock>
			<S.VolumeContent>
				<S.VolumeImage>
					<S.VolumeSVG>
						<use xlinkHref='/img/icon/sprite.svg#icon-volume' />
					</S.VolumeSVG>
				</S.VolumeImage>
				<S.VolumeProgress className='_btn'>
					<S.VolumeProgressLine
						type='range'
						name='range'
						value={volume}
						min={0}
						max={1}
						step={0.1}
						onChange={event => {
							handleVolumeChange(Number(event.target.value))
						}}
					/>
				</S.VolumeProgress>
			</S.VolumeContent>
		</S.VolumeBlock>
	)
}
