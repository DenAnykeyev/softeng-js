const fs = require('fs');
const _ = require('lodash');

const { colors, argb } = require('./data/data');

const colorObjects = _.zipWith(colors, argb, (color, argbValues) => ({
	color,
	hex_name: `#${argbValues.slice(0, 3).map(value => value.toString(16).padStart(2, '0')).join('')}`
}));

const result = _.sortBy(colorObjects, 'color');

fs.writeFileSync('out\\task5.json', JSON.stringify(result));

console.log("Готово");