/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState} from 'react'
import { UserContext } from './contexts/userContext'
import { GlobalStyle } from './GlobalStyle'
import { AppRoutes } from './routes'

const App = () => {
	const [isUser, setIsUser] = useState(false)
	const userName =localStorage.getItem("token")
	const userProps = { isUser, setIsUser, userName }

	

	return (
		<>
			<GlobalStyle />
			<UserContext.Provider value={userProps}>
				<AppRoutes isUser={isUser} />
			</UserContext.Provider>
		</>
	)
}

export default App
