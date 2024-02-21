import React, { Dispatch, SetStateAction } from 'react'
import * as S from './PopupGenre.style'
import { useOutsideClick } from '../../../../../../hooks/useOutsideClick'
import { SelectFilter } from '../../../../../../types/SelectFilter'
import { useGetTracksWithId } from '../../../../../../hooks/useGetTracksWithId'
import { useAppDispatch } from '../../../../../../store/hooks'
import { setFilterByGenre } from '../../../../../../store/reducers/trackSlice'

interface IProps {
	setOpen: Dispatch<SetStateAction<SelectFilter>>
	select: string[]
}

export const PopupGenre = ({ setOpen, select }: IProps) => {
	const ref = useOutsideClick(() => {
		setOpen('Close')
	})
	const { data: tracklist } = useGetTracksWithId()
	const genres = tracklist && tracklist.map(elem => elem.genre)
	const listOfAuthors = [...new Set(genres)].sort()
	const dispatch = useAppDispatch()

	const handleClick = (string: string) => {
		dispatch(setFilterByGenre(string))
	}
	const checkStatus = (string: string) => !!select.includes(string)

	return (
		<S.PopUpGenre ref={ref}>
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
		</S.PopUpGenre>
	)
}
