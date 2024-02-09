/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import './App.css'
import { Main } from './components/Main/Main'
import { Bar } from './components/Bar/Bar'

function App() {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(prev => !prev)
			
		}, 5000)
	}, [])

	return (
		<div className='App'>
			<div className='container'>
				<Main isLoading={isLoading} />
				<Bar />
				<footer className='footer' />
			</div>
		</div>
	)
}

export default App
