import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store/hooks'
import { Itrack } from '../types/ITrack'
import { pauseTrack, setCurrentTrack } from '../store/reducers/trackSlice'
import { useGetCurrentPlaylist } from './useGetCurrentPlaylist'

type INext = 'onclick' | 'onListEnd'

export const useNextTrack = (type: INext) => {
	const dispatch = useDispatch()
	const trackList = useGetCurrentPlaylist()
	const currentTrack = useAppSelector(
		state => state.tracks.currentTrack,
	) as Itrack

	const getNextTrack = () => {
		const nextIndex = trackList.indexOf(currentTrack) + 1
		if (nextIndex === trackList.length && type === 'onclick') return
		if (nextIndex === trackList.length && type === 'onListEnd') {
			dispatch(pauseTrack())
			return
		}
		dispatch(setCurrentTrack(trackList[nextIndex]))
	}
	return getNextTrack
}

export const usePrevTrack = () => {
	const dispatch = useDispatch()
	const trackList = useGetCurrentPlaylist()
	const currentTrack = useAppSelector(
		state => state.tracks.currentTrack,
	) as Itrack
	const getPrevTrack = () => {
		const prevIndex = trackList.indexOf(currentTrack) - 1
		if (prevIndex === -1) return
		dispatch(setCurrentTrack(trackList[prevIndex]))
	}
	return getPrevTrack
}
