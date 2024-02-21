import React from 'react'
import * as S from "./ContentTitle.style"

export const ContentTitle = () => (
	<S.TitleBlock>
		<S.TitleTrack>Трек</S.TitleTrack>
		<S.TitleAuthor>ИСПОЛНИТЕЛЬ</S.TitleAuthor>
		<S.TitleAlbum>АЛЬБОМ</S.TitleAlbum>
		<S.TitleDuration>
			<S.TitleSVG>
				<use xlinkHref='/img/icon/sprite.svg#icon-watch' />
			</S.TitleSVG>
		</S.TitleDuration>
	</S.TitleBlock>
)
