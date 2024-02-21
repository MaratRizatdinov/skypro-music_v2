import React from 'react'
import { useLocation } from 'react-router-dom'
import * as S from './Title.style'

export const Title = () => {
	const params = useLocation().pathname

	interface IPage {
		name: string
		title: string
	}

	interface IPages {
		[key: string]: IPage
	}

	const pageTitles: IPages = {
		'/': { name: 'Main', title: 'Треки' },
		'/favorites': { name: 'Favorites', title: 'Мои треки' },
		'/categories/1': { name: 'Classic', title: 'Плейлист дня' },
		'/categories/2': { name: 'Rok', title: '100 танцевальных хитов' },
		'/categories/3': { name: 'Electro', title: 'Инди заряд' },
	}
	
	const getTitle = () => {
		if (params in pageTitles) {
			return pageTitles[params].title
		}
		return 'Страницы не существует'
	}

	return <S.Title>{getTitle()}</S.Title>
}
