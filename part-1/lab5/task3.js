const request = require('request');

request('https://pcoding.ru/txt/labrab04-2.txt', (error, response, body) => {
	if (error) {
		console.error(error);
	} else if (response.statusCode !== 200) {
		console.error(`Статус: ${response.statusCode}`);
	} else {
		const lines = body.trim().split('\n');
		const sums = lines.map(line => line.split(' ').reduce((acc, num) => {
			if (parseInt(num) % 2 !== 0) {
				acc += parseInt(num);
			}
			return acc;
		}, 0));
		const maxSum = Math.max(...sums);
		const maxSumIndex = sums.findIndex(sum => sum === maxSum);
		console.log(`Индекс строки, в которой самая большая сумма нечетных чисел: ${maxSumIndex}`);
	}
});
