import React, { Dispatch, SetStateAction } from 'react'
import { SelectFilter } from '../../../../../../types/SelectFilter'
import { useOutsideClick } from '../../../../../../hooks/useOutsideClick'
import * as S from './PopupYear.style'
import { useAppDispatch } from '../../../../../../store/hooks'
import { changeSortType } from '../../../../../../store/reducers/trackSlice'
import { Isort } from '../../../../../../types/IUserTypes'

interface IProps {
	setOpen: Dispatch<SetStateAction<SelectFilter>>
	select: Isort
}

export const PopupYear = ({ setOpen, select }: IProps) => {
	const ref = useOutsideClick(() => {
		setOpen('Close')
	})
	const dispatch = useAppDispatch()
	return (
		<S.PopUpYear ref={ref}>
			<S.PopUpList>
				<S.PopUpItem
					key='1'
					$isActive={select === 'По умолчанию'}
					onClick={() => dispatch(changeSortType('По умолчанию'))}
				>
					По умолчанию
				</S.PopUpItem>
				<S.PopUpItem
					key='2'
					$isActive={select === 'По возрастанию'}
					onClick={() => dispatch(changeSortType('По возрастанию'))}
				>
					По возрастанию
				</S.PopUpItem>
				<S.PopUpItem
					key='3'
					$isActive={select === 'По убыванию'}
					onClick={() => dispatch(changeSortType('По убыванию'))}
				>
					По убыванию
				</S.PopUpItem>
			</S.PopUpList>
		</S.PopUpYear>
	)
}
