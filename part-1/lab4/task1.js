const fs = require('fs');
const _ = require('lodash');

const data = fs.readFileSync('data\\users.json');
const users = JSON.parse(data);

const result = _(users)
	.filter(user => parseFloat(user.address.geo.lat) < 0)
	.map(user => ({ username: user.username, city: user.address.city }))
	.orderBy(['city'], ['desc'])
	.value();

fs.writeFileSync('out\\task1.json', JSON.stringify(result));

console.log("Готово");