const fs = require('fs');
const _ = require('lodash');

const data = fs.readFileSync('data\\clients.json');
const clients = JSON.parse(data).clients;

const result = _(clients)
	.filter(client => client.address.city === "Кунгур")
	.orderBy(['gender', 'age', 'name'], ['asc', 'desc', 'asc'])
	.value();

fs.writeFileSync('out\\task2.json', JSON.stringify(result));

console.log("Готово");