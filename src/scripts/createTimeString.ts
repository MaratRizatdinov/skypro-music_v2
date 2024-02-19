export const createTimeString = (seconds: number): string => {
	const padTo2Digits = (num: number): string => num.toString().padStart(2, '0')

	const showSeconds =
		seconds < 60 ? seconds : seconds - 60 * Math.floor(seconds / 60)
	let minutes = Math.floor(seconds / 60)
	minutes %= 60
	return `${padTo2Digits(minutes)}.${padTo2Digits(showSeconds)}`
}
