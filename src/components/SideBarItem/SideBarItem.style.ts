import styled from 'styled-components'

export const SideBarItem = styled.div`
	width: 250px;
	height: 150px;
	background-color: #4e4e4e;
	cursor: pointer;
	&:not(:last-child) {
		margin-bottom: 30px;
	}
`
export const SideBarLink = styled.span`
	width: 100%;
	height: 100%;
`
export const SideBarImg = styled.img`
	width: 100%;
	height: auto;
`
