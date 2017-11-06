//date.js
const weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
export function getShortDate(datestr) {
	const newdate = new Date(datestr)
	return `${newdate.getMonth()+1}.${newdate.getDate()}`
}
export function getFullDate(datestr) {
	const newdate = new Date(datestr)
	return `${newdate.getFullYear()}年${newdate.getMonth()+1}月${newdate.getDate()}日`
}
export function getWeek(datestr) {
	const week = new Date(datestr).getDay()
	return weekArr[week]
}
export function getHourTime(datestr) {
	//2017-10-18 13:00
	return datestr.split(' ')[1]
}