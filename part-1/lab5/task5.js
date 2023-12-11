const request = require('sync-request');

const res = request('GET', 'https://pcoding.ru/txt/labrab04-3.txt');
const data = res.getBody('utf-8');
const languages = data
	.trim()
	.split('\n')
	.map((item) => {
		const [rating, name] = item.split(';');
		return { rating: parseFloat(rating.replace(',', '.')), name };
	})
	.sort((a, b) => {
		if (a.rating === b.rating) {
			return 0;
		}
		return a.rating > b.rating ? -1 : 1;
	});
languages.forEach((language) => {
	console.log(`${language.rating.toFixed(2)}%: ${language.name}`);
});
