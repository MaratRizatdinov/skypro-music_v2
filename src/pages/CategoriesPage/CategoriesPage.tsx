import React from 'react'
import { useParams } from 'react-router-dom'
import { TrackBlock } from '../../components/TrackBlock/TrackBlock'

export const CategoriesPage = () => {
	const params = useParams()
	if (params.id === '1') {
		return <TrackBlock page='classic' />
	}
	if (params.id === '2') {
		return <TrackBlock page='rock' />
	}
	if (params.id === '3') {
		return <TrackBlock page='elektro' />
	}
	return<h1>Cnh</h1>
}
