const timeEl = document.querySelector('.time')
const dayEl = document.getElementById('day')
const dateEl = document.getElementById('date')

function getTime() {
	let date = new Date()

	const daysArr = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	let day = date.getDay()
	dayEl.innerText = daysArr[day]

	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()

	let timeView = `${hour}:${minute}:${second}`
	timeEl.innerHTML = timeView

	let fullDate = `${date.getDate()}.${
		date.getMonth() + 1
	}.${date.getFullYear()}`
	dateEl.innerText = fullDate
}
getTime()

setInterval(() => {
	console.log('time')
	getTime()
}, 1000)
