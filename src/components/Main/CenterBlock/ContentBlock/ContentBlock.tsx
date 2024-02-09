import React from 'react'
import { ContentTitle } from './ContentTitle/ContentTitle'
import { PlaylistItem } from './PlaylistItem/PlaylistItem'
import { IsLoading } from '../../../../types/interface'

export const ContentBlock = ({ isLoading }: IsLoading) => (
	<div className='centerblock__content'>
		<ContentTitle />
		<div className='content__playlist playlist'>
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
			<PlaylistItem isLoading={isLoading} />
		</div>
	</div>
)
