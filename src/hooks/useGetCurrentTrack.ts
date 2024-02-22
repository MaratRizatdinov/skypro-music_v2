import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
	playTrack,
	setCurrentList,
	setCurrentTrack,
} from '../store/reducers/trackSlice'
import { IInit, Itrack } from '../types/ITrack'

interface IProps {
	track: Itrack | IInit
	list: Itrack[] | IInit[]
}

export const useGetCurrentTrack = ({ track, list }: IProps) => {
	const dispatch = useAppDispatch()
	const isPlaying = useAppSelector(state => state.tracks.isPlaying)

	const selectTrackClick = () => {
		dispatch(setCurrentTrack(track))
		dispatch(setCurrentList(list))
		if (!isPlaying) dispatch(playTrack())
	}
	return selectTrackClick
}
