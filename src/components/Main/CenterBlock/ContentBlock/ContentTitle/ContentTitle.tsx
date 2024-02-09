import React from 'react'

export const ContentTitle = () => (
	<div className='content__title playlist-title'>
		<div className='playlist-title__col col01'>Трек</div>
		<div className='playlist-title__col col02'>ИСПОЛНИТЕЛЬ</div>
		<div className='playlist-title__col col03'>АЛЬБОМ</div>
		<div className='playlist-title__col col04'>
			<svg className='playlist-title__svg'>
				<use xlinkHref='img/icon/sprite.svg#icon-watch' />
			</svg>
		</div>
	</div>
)
