import styled from 'styled-components'

type SceletonProp ={
	$width:string
	$height:string
}

export const Sceleton = styled.div<SceletonProp>`
	background-color: #4e4e4e;
	width: ${props => props.$width};
	height: ${props => props.$height};
`
