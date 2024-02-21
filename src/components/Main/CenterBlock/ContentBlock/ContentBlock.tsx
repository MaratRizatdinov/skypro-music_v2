import React from 'react'
import { Outlet } from 'react-router-dom'

import { ContentTitle } from './ContentTitle/ContentTitle'

import * as S from './ContentBlock.style'

export const ContentBlock = () => (
	<S.ContentBlock>
		<ContentTitle />
		<Outlet />
	</S.ContentBlock>
)
