import styled from 'styled-components'

export const PopUpAuthors = styled.div`
	position: absolute;
	width: 320px;
	height: 305px;
	background-color: #313131;
	top: 50px;
	border-radius: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const PopUpList = styled.ul`
	width: 250px;
	height: 237px;
	font-size: 20px;
	line-height: 24px;
	overflow: hidden;
	overflow-y: auto;
	scrollbar-width: thin;
	scrollbar-color: #ffffff  #4B4949;
`
interface Iprops{
	$isActive: boolean
}
export const PopUpItem = styled.li<Iprops>`
	font-size: 20px;
	padding-bottom: 20px;
	line-height: 24px;
	cursor: pointer;
	color: ${props=> props.$isActive ? 'blue':'white'};
	&:hover {
		color: #b672ff;
		text-decoration: underline;
	}
`
