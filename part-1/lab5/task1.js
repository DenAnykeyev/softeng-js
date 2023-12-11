const request = require('request');

request('https://pcoding.ru/txt/labrab04-1.txt', (error, response, body) => {
	if (error) {
		console.error(error);
	} else if (response.statusCode !== 200) {
		console.error(`Статус: ${response.statusCode}`);
	} else {
		const numbers = body.trim().split('\n').map(Number);
		const twoDigitNumbers = numbers.filter(num => num > 9 && num < 100);
		const maxNumber = Math.max(...twoDigitNumbers);
		console.log(`Самое большое двузначное число: ${maxNumber}`);
	}
});