let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');
function setDate() {
	let date = new Date();
	let seconds = date.getSeconds();
	console.log(seconds);
	let secondsToDegree = seconds / 60 * 360 + 90;
	secondHand.style.transform = `rotate(${secondsToDegree}deg)`;
	let minutes = date.getMinutes();
	let minutesToDegree = minutes / 60 * 360 + 90;
	minuteHand.style.transform = `rotate(${minutesToDegree}deg)`;
	let hour = date.getHours();
	let hoursToDegree = hour / 12 * 360 + 90;
	hourHand.style.transform = `rotate(${hoursToDegree}deg)`;
}

setInterval(setDate, 1000);
