import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage'
import { NotFoundPage } from './pages/NotFound/NotFound'
import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage'
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { FullPage } from './pages/FullPage/FullPage'


interface Iprops {
	isUser: boolean
}
export const AppRoutes = ({ isUser }: Iprops) => (
	<Routes>
		<Route path='/registration' element={<RegistrationPage />} />
		<Route path='/login' element={<LoginPage />} />
		<Route element={<ProtectedRoute isAllowed={isUser} />}>
			<Route path='/' element={<MainPage />}>
				<Route index element={<FullPage/>} />
				<Route path='favorites' element={<FavoritesPage />} />
				<Route path='categories/:id' element={<CategoriesPage />} />
			</Route>
		</Route>
		<Route path='*' element={<NotFoundPage />} />
	</Routes>
)
