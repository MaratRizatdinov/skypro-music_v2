/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IInit, Itrack } from '../../types/ITrack'
import { IUserState, IUserResponse } from '../../types/IUserTypes'

interface TrackState {	
	isPlaying: boolean
	currentTrack?: Itrack | IInit
	currentList?: Itrack []| IInit[]
	isLoop: boolean
	user?: IUserState
	shuffleList:
		| { status: true; tracks: Itrack[] | IInit[] }
		| { status: false; tracks: [] }
}
const initialState: TrackState = {	
	isPlaying: false,	
	isLoop: false,
	shuffleList: { status: false, tracks: [] },
}

const trackSlice = createSlice({
	name: 'tracks',
	initialState,
	reducers: {		
		setCurrentTrack(state, action: PayloadAction<Itrack | IInit>) {
			state.currentTrack = action.payload
		},		
		setCurrentList(state, action:PayloadAction<Itrack[] | IInit[]>){
			state.currentList = action.payload
		},
		playTrack(state) {
			state.isPlaying = true
		},
		pauseTrack(state) {
			state.isPlaying = false
		},
		toggleLoop(state) {
			state.isLoop = !state.isLoop
		},
		setShuffleToState(state, action: PayloadAction<Itrack[] | IInit[]>) {
			state.shuffleList = { status: true, tracks: action.payload }
		},
		clearShuffle(state) {
			state.shuffleList = { status: false, tracks: [] }
		},
		setUserData(state, action: PayloadAction<IUserResponse>) {
			state.user = action.payload
		},
		clearUserData(state) {
			delete state.user
		},
		setUserToken(state, action: PayloadAction<string>) {
			if (state.user) {
				state.user.access = action.payload
			}
		},
	},
})
export const {	
	setCurrentTrack,	
	setCurrentList,	
	playTrack,
	pauseTrack,
	toggleLoop,
	setShuffleToState,
	clearShuffle,
	setUserData,
	clearUserData,
	setUserToken
} = trackSlice.actions
export default trackSlice.reducer

// export const selectCount = (state: RootState) => state.counter.value
