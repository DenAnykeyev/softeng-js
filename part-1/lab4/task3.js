const fs = require('fs');
const _ = require('lodash');

const data = fs.readFileSync('data\\colors.json');
const colors = JSON.parse(data);

const result = _.chain(colors)
	.map(_.keys)
	.flatten()
	.filter(color => color.length < 6)
	.sort()
	.value();

fs.writeFileSync('out\\task3.json', JSON.stringify(result));

console.log("Готово");