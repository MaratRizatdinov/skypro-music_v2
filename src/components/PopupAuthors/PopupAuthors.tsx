import React, { Dispatch, SetStateAction } from 'react'
import { SelectFilter } from '../../types/SelectFilter'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import * as S from "./PopupAuthors.style"

interface IProps {
	setOpen: Dispatch<SetStateAction<SelectFilter>>
}

export const PopupAuthors = ({ setOpen }: IProps) => {
	const ref = useOutsideClick(() => {
		setOpen('Close')		
	})
	return (
		<S.PopUpAuthors ref={ref}>
			<ul>
				<li>Фильтр по авторам</li>
				<li>Фильтр по авторам</li>
				<li>Фильтр по авторам</li>
				<li>Фильтр по авторам</li>
				<li>Фильтр по авторам</li>
			</ul>
		</S.PopUpAuthors>
	)
}
