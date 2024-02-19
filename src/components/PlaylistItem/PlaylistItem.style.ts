import styled from 'styled-components'

export const Item = styled.div`
	width: 100%;
	display: block;
	margin-bottom: 12px;
`
export const Track = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`
export const TrackTitle = styled.div`
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
	width: 447px;
`
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
export const TrackText = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	cursor: pointer;
`
export const TrackAuthor = styled.div`
	width: 321px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #ffffff;
	text-align: left;
	cursor: pointer;
`
export const TrackAlbum = styled.div`
	width: 245px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: #696969;
	cursor: pointer;
`
export const TrackTimeSVG = styled.svg`
	width: 14px;
	height: 12px;
	margin-right: 17px;
	fill: transparent;
	stroke: #696969;
`
export const TrackTimeText = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: right;
	color: #696969;
`
