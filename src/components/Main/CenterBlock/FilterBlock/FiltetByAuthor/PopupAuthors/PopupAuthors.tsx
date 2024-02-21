import React, { Dispatch, SetStateAction } from 'react'
import { SelectFilter } from '../../../../../../types/SelectFilter'
import { useOutsideClick } from '../../../../../../hooks/useOutsideClick'
import * as S from './PopupAuthors.style'
import { useAppDispatch } from '../../../../../../store/hooks'
import { useGetTracksWithId } from '../../../../../../hooks/useGetTracksWithId'
import { setFilterByAuthors } from '../../../../../../store/reducers/trackSlice'

interface IProps {
	setOpen: Dispatch<SetStateAction<SelectFilter>>
	select: string[]
}

export const PopupAuthors = ({ setOpen, select }: IProps) => {
	const ref = useOutsideClick(() => {
		setOpen('Close')
	})
	const { data: tracklist } = useGetTracksWithId()
	const authors = tracklist && tracklist.map(elem => elem.author)
	const listOfAuthors = [...new Set(authors)].sort()
	const dispatch = useAppDispatch()

	const handleClick = (string: string) => {
		dispatch(setFilterByAuthors(string))
	}
	const checkStatus = (string: string) => !!select.includes(string)

	return (
		<S.PopUpAuthors ref={ref}>
			<S.PopUpList>
				{listOfAuthors.map(elem => (
					<S.PopUpItem
						key={elem}
						$isActive={checkStatus(elem)}
						onClick={() => handleClick(elem)}
					>
						{elem}
					</S.PopUpItem>
				))}
			</S.PopUpList>
		</S.PopUpAuthors>
	)
}
