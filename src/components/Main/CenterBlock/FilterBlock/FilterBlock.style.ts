import styled from 'styled-components'

export const FilterBlock = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-bottom: 51px;
	gap: 15px;
`
export const FilterTitle = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	margin-right: 15px;
`
export const FilterButton = styled.div`	
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	border: 1px solid #ffffff;
	border-radius: 60px;
	padding: 6px 20px;
	&:hover {
		border-color: #d9b6ff;
		color: #d9b6ff;
		cursor: pointer;
	}
	&:active {
		border-color: #ad61ff;
		color: #ad61ff;
		cursor: pointer;
	}
`
export const FilterButtonYear = styled(FilterButton)`
	width: 165px;
`	


export const FilterBlockAuthors = styled.div`
	position: relative;
`
export const FilterBlockGenre = styled.div`
	position: relative;
`
export const FilterBlockYear = styled.div`
	position: relative;
`
export const FilterCount = styled.div`
	position: absolute;
	width: 25px;
	height: 25px;
	background-color: #ad61ff;
	border-radius: 12px;
	color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	top: -13px;
`
export const FilterCountAuthors = styled(FilterCount)`
	
	left: 120px;
`
export const FilterCountGenre = styled(FilterCount)`
	
	left: 75px;
`
export const FilterCountYear = styled(FilterCount)`	
	left: 145px;
`