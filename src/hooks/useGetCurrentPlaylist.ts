import { INITARRAY } from '../constants/initArray'
import { useAppSelector } from '../store/hooks'
import { Itrack, IInit } from '../types/ITrack'


export const useGetCurrentPlaylist = () => {
	let trackList: Itrack[] | IInit[]
	const originList = useAppSelector(state=>state.tracks.currentList)
	const { status: shuffleStatus, tracks: shuffleList } = useAppSelector(
		state => state.tracks.shuffleList,
	)
	if (shuffleStatus) {
		trackList = shuffleList
	} else {
		trackList = originList || INITARRAY
	}
	return trackList
}
