/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IInit, Itrack } from '../../types/ITrack'
import { IUserState, IUserResponse, Isort } from '../../types/IUserTypes'

interface TrackState {
	isPlaying: boolean
	currentTrack?: Itrack | IInit
	currentList?: Itrack[] | IInit[]
	isLoop: boolean
	user?: IUserState
	shuffleList:
		| { status: true; tracks: Itrack[] | IInit[] }
		| { status: false; tracks: [] }
	searchText: string
	filterAuthors: string[]
	filterGenre: string[]
	sortType: Isort
}
const initialState: TrackState = {
	isPlaying: false,
	isLoop: false,
	shuffleList: { status: false, tracks: [] },
	searchText: '',
	filterAuthors: [],
	filterGenre: [],
	sortType: "По умолчанию"
}

const trackSlice = createSlice({
	name: 'tracks',
	initialState,
	reducers: {
		setCurrentTrack(state, action: PayloadAction<Itrack | IInit>) {
			state.currentTrack = action.payload
		},
		setCurrentList(state, action: PayloadAction<Itrack[] | IInit[]>) {
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
		setSearchText(state, action: PayloadAction<string>) {
			state.searchText = action.payload
		},
		setFilterByAuthors(state, action: PayloadAction<string>) {
			const string = action.payload
			const select = state.filterAuthors
			if (select.includes(string)) {
				state.filterAuthors = select.filter(item => item !== string)
			} else state.filterAuthors = [...select, string]
		},
		setFilterByGenre(state, action: PayloadAction<string>) {
			const string = action.payload
			const select = state.filterGenre
			if (select.includes(string)) {
				state.filterGenre = select.filter(item => item !== string)
			} else state.filterGenre = [...select, string]
		},
		clearAllState(state) {
			state.isPlaying = false
			state.isLoop = false
			state.shuffleList = { status: false, tracks: [] }
			state.searchText = ''
			state.filterAuthors = []
			state.filterGenre = []
			state.sortType ='По умолчанию'
			delete state.currentTrack
			delete state.currentList
			delete state.user
		},
		changeSortType(state, action: PayloadAction<Isort>){
			state.sortType =action.payload
		}
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
	setUserToken,
	setSearchText,
	setFilterByAuthors,
	setFilterByGenre,
	clearAllState,
	changeSortType
} = trackSlice.actions

export default trackSlice.reducer

// export const selectCount = (state: RootState) => state.counter.value
