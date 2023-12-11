const request = require('sync-request');

const res = request('GET', 'https://pcoding.ru/json/abiturs.json');
const data = JSON.parse(res.getBody('utf-8'));
const abiturs = data.sort((a, b) => {
	if (a.city === b.city) {
		return b.rating - a.rating;
	}
	return a.city > b.city ? 1 : -1;
});
abiturs.forEach((abitur) => {
	console.log(`Город: ${abitur.city}, Рейтинг: ${abitur.rating}, Фамилия: ${abitur.lastName}`);
});
