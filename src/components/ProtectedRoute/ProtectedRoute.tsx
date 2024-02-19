import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Iprops {	
	isAllowed: boolean
	redirectPath?: string
}

export const ProtectedRoute = ({	
	redirectPath ='/login',
	isAllowed,
}: Iprops) => {	
	if (isAllowed === false) {
		return <Navigate to={redirectPath} replace />
	}
	return <Outlet/>
}
