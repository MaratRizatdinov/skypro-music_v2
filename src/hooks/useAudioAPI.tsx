/* eslint-disable no-unused-expressions */
import { useState, useRef, useEffect } from 'react'

export const useAudioAPI = () => {
	const audioRef = useRef<any>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [isLoop, setIsLoop] = useState(false)
	const [currentTime, setCurrentTime] = useState(100)
	const duration = 230
	const audio = audioRef.current

	useEffect(() => {
		if (audio) {
			isPlaying ? audio.pause() : audio.play()
		}
	}, [isPlaying])

	useEffect(() => {
		// const audio = audioRef.current
		if (audio) {
			isLoop ? (audio.loop = true) : (audio.loop = false)
		}
	}, [isLoop])

	useEffect(() => {
		if (audio && audio.currentTime) {
			setCurrentTime(audio.currentTime)
		}
	}, [audio.currentTime])

	return {
		audioRef,
		isPlaying,
		setIsPlaying,
		isLoop,
		setIsLoop,
		currentTime,
		setCurrentTime,
		duration,
	}
}
