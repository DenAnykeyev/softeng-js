const request = require('request');

request('https://pcoding.ru/txt/labrab04-2.txt', (error, response, body) => {
	if (error) {
		console.error(error);
	} else if (response.statusCode !== 200) {
		console.error(`Статус: ${response.statusCode}`);
	} else {
		const lines = body.trim().split('\n');
		const count = lines.filter(line => line.split(' ').every(num => parseInt(num) % 2 !== 0)).length;
		console.log(`Количество строк, в которых все числа нечетные: ${count}`);
	}
});
