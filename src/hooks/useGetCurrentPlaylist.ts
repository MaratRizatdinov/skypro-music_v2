import { INITARRAY } from '../constants/initArray'
import { useAppSelector } from '../store/hooks'
import { Itrack, IInit } from '../types/ITrack'
import { useGetTracksWithId } from './useGetTracksWithId'

export const useGetCurrentPlaylist = () => {
	let trackList: Itrack[] | IInit[]
	const {data: originList} = useGetTracksWithId()
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
