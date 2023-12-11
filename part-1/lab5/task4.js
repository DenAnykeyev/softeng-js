const request = require('sync-request');

const res = request('GET', 'https://pcoding.ru/txt/labrab04-3.txt');
const data = res.getBody('utf-8');
const languages = data.trim().split('\n').sort();
languages.forEach((language) => {
	console.log(language);
});