import React from 'react'

interface TitleProps {
	children: string
}

export const Title = ({ children }: TitleProps) => (
	<h2 className='centerblock__h2'>{children}</h2>
)
