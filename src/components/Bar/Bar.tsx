/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from 'react'
import { PlayerControls } from './PlayerControls/PlayerControls'
import { PlayerTrack } from './PlayerTrack/PlayerTrack'
import { VolumeBlock } from './VolumeBlock/VolumeBlock'
import * as S from './Bar.style'
import { ProgressBar } from './ProgressBar/ProgressBar'
import { IInit, Itrack } from '../../types/ITrack'
import { useAppSelector } from '../../store/hooks'
import { useTracksControl } from '../../hooks/useTrackControls'

type Iprops = {
	currentTrack: Itrack | IInit | undefined
}
export const Bar = ({ currentTrack }: Iprops) => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const track = currentTrack as Itrack
	const isPlaying = useAppSelector(state => state.tracks.isPlaying)	
	const {getNextTrack} = useTracksControl()

	useEffect(() => {
		const audio = audioRef.current as HTMLAudioElement
		isPlaying ? audio.play() : audio.pause()
	}, [isPlaying, track])

	useEffect(() => {
		const audio = audioRef.current as HTMLAudioElement
		const timeUpdate = () => {
			if (audio.currentTime && audio.duration) {
				setCurrentTime(audio.currentTime)
				setDuration(audio.duration)
			} else {
				setCurrentTime(0)
				setDuration(0)
			}
		}
		audio.addEventListener('timeupdate', timeUpdate)
		return () => {
			audio.removeEventListener('timeupdate', timeUpdate)
		}
	}, [])

	return (
		<S.Bar>
			<audio
				src={track.track_file}
				controls
				ref={audioRef}				
				onEnded={()=>getNextTrack('onListEnd')}
				style={{display:'none'}}
			/>
			<S.BarContent>
				<ProgressBar
					currentTime={currentTime}
					duration={duration}
					audioRef={audioRef}
				/>
				<S.BarProgress />
				<S.BarPlayerBlock>
					<S.BarPlayer>
						<PlayerControls audioRef={audioRef} />
						<PlayerTrack track={track} />
					</S.BarPlayer>
					<VolumeBlock audioRef={audioRef} />
				</S.BarPlayerBlock>
			</S.BarContent>
		</S.Bar>
	)
}
