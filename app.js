const timeEl = document.querySelector('.time')

function getTime() {
	let date = new Date()

	let hour = date.getHours()
	let minute = date.getMinutes()
	let second = date.getSeconds()

	let timeView = `${hour}:${minute}:${second}`
	timeEl.innerHTML = timeView
}
getTime()

setInterval(() => {
	console.log('time')
	getTime()
}, 1000)

// const weekDay = document.querySelector('.day')

// function getDay() {
// 	let day = new Date()

// 	let dayOfTheWeek = date.getDayTiwe()

// 	let DayView = `${day}`

// 	weekDay.innerHTML = DayView
// }

// getDay()
