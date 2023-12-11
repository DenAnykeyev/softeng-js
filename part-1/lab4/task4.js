const fs = require('fs');
const _ = require('lodash');

const data = fs.readFileSync('data\\colors.json');
const colors = JSON.parse(data);

const result = _.chain(colors)
	.map((color) => {
		const colorName = _.keys(color)[0];
		const rgb = _.slice(color[colorName], 0, 3);
		return { color: colorName, rgb: rgb };
	})
	.sortBy('color')
	.value();

fs.writeFileSync('out\\task4.json', JSON.stringify(result));

console.log("Готово");