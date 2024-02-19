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
		'/categories/1': { name: 'Classic', title: 'Классическая музыка' },
		'/categories/2': { name: 'Rok', title: 'Рок-музыка' },
		'/categories/3': { name: 'Electro', title: 'Электронная музыка' },
	}
	
	const getTitle = () => {
		if (params in pageTitles) {
			return pageTitles[params].title
		}
		return 'Страницы не существует'
	}

	return <S.Title>{getTitle()}</S.Title>
}
