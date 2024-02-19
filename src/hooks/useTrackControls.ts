import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store/hooks'
import { Itrack } from '../types/ITrack'
import { pauseTrack, setCurrentTrack } from '../store/reducers/trackSlice'
import { useGetCurrentPlaylist } from './useGetCurrentPlaylist'

type INext = 'onclick' | 'onListEnd'

export const useNextTrack = (type: INext) => {
	const dispatch = useDispatch()
	const trackList = useGetCurrentPlaylist()
	const shuffleStatus =useAppSelector(s=>s.tracks.shuffleList.status)
	const currentTrack = useAppSelector(
		state => state.tracks.currentTrack,
	) as Itrack

	const getNextTrack = () => {
		let nextIndex = trackList.indexOf(currentTrack) + 1
		if (nextIndex === trackList.length && type === 'onclick' && shuffleStatus===false) return
		if (nextIndex === trackList.length && type === 'onclick' && shuffleStatus===true) nextIndex=0
		if (nextIndex === trackList.length && type === 'onListEnd' && shuffleStatus===false) {
			dispatch(pauseTrack())
			return
		}
		if (nextIndex === trackList.length && type === 'onListEnd' && shuffleStatus===true) nextIndex=0
		dispatch(setCurrentTrack(trackList[nextIndex]))
	}
	return getNextTrack
}

export const usePrevTrack = () => {
	const dispatch = useDispatch()
	const trackList = useGetCurrentPlaylist()
	const shuffleStatus =useAppSelector(s=>s.tracks.shuffleList.status)
	const currentTrack = useAppSelector(
		state => state.tracks.currentTrack,
	) as Itrack
	const getPrevTrack = () => {
		let prevIndex = trackList.indexOf(currentTrack) - 1
		if (prevIndex === -1 && shuffleStatus===false) return
		if (prevIndex === -1 && shuffleStatus===true) prevIndex =trackList.length-1
		dispatch(setCurrentTrack(trackList[prevIndex]))
	}
	return getPrevTrack
}
