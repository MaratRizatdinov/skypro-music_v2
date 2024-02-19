import React, { ReactElement } from 'react'
import * as S from './Sceleton.style'

interface IProps {
	children: ReactElement
	$width: string
	$height: string
	isLoadingMode: boolean
}

export const Sceleton = ({
	children,
	$width,
	$height,
	isLoadingMode,
}: IProps) => {
	if (isLoadingMode) {
		return <S.Sceleton $width={$width} $height={$height} />
	}
	return children
}
