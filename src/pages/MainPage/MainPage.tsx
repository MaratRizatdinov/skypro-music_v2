import React from 'react'
import { Main } from '../../components/Main/Main'
import { Bar } from '../../components/Bar/Bar'
import * as S from './MainPage.style'
import { useAppSelector } from '../../store/hooks'

export const MainPage = () => {
	const currentTrack = useAppSelector(s => s.tracks.currentTrack)

	return (
		<S.Wrapper>
			<S.Container>
				<Main />
				{currentTrack ? <Bar currentTrack={currentTrack} /> : null}
				<footer />
			</S.Container>
		</S.Wrapper>
	)
}
