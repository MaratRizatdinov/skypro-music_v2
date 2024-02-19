import styled, { css, keyframes } from 'styled-components'

export const TrackTitleImg = styled.div`
	width: 51px;
	height: 51px;
	padding: 16px;
	background: #313131;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	margin-right: 17px;
`
export const TrackTitleSVG = styled.svg`
	width: 18px;
	height: 17px;
	fill: transparent;
	stroke: #4e4e4e;
`
const active = keyframes`  
  0%,100% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
`
const animationCode = css`
	${active} 1s ease-in-out infinite both
`




interface Iprops {
	$isPlaying: boolean
}

export const TrackTitleSvgActive = styled.svg<Iprops>`
	width: 16px;
	height: 16px;
	background-color: #b672ff;
	border-radius: 8px;
	display: block;
	animation: ${props => (props.$isPlaying ? animationCode : 'none')};
`
