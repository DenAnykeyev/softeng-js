/**
 * task02 Обработать json-данные, собранные с wb
 * Кто-то написал парсер данных с сайта WB, Вам нужно обработать полученные ранее данные.
 * Данные находятся по адресам:
 * 1. http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json
 * 2. http://files-pcoding.1gb.ru/json?filename=wb_laptops_pricedown.json
 * Это списки ноутбуков с WB (ноябрь 2023), отсортированные по убыванию популярности и цены.
 * Задание:
 * 1. получить данные из одного url-адреса
 * 2. получить данные из второго url-адреса
 * 3. выявить список товаров, которые есть в обоих списках
 * 4. сформировать массив объектов, в который попадут только выбранные товары
 * 5. сохранить массив объектов в выходной json-файл
 */

const request = require('request');
const fs = require('fs');

const popularUrl = 'http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json';
const priceDownUrl = 'http://files-pcoding.1gb.ru/json?filename=wb_laptops_pricedown.json';

/**
 * Объявление функции получения из url-адреса ноутбуков
 * и последующее преобразование их к объекту Promise
 * @param {string} url 
 * @returns Promise
 */
const getLaptops = (url) => {
	return new Promise((resolve, reject) => {
		request(url, (error, response, body) => {
			if (error || response.statusCode !== 200) {
				reject(error || new Error(`Status code: ${response.statusCode}`)); // go error?
			} else {
				const laptops = JSON.parse(body);  // Преобразуем полученные данные в массив объектов
				resolve(laptops); // Возвращаем полученный массив объектов через resolve
			}
		});
	});
};

const processLaptops = async () => {
	try {
		// Получаем данные с одного адреса асинхронно
		const popularLaptops = await getLaptops(popularUrl);
		// Получаем данные со второго адреса асинхронно
		const priceDownLaptops = await getLaptops(priceDownUrl);

		// Формируем список товаров, которые есть в одном и другом списке
		const overlappedLaptops = popularLaptops.filter(
			(laptop) => priceDownLaptops.find((item) => item.id === laptop.id)
		);
		// Сохраняем список товаров, которые есть в одном и другом списке
		fs.writeFileSync('out\\task2.json', JSON.stringify(overlappedLaptops));
	} catch (error) {
		console.error(error);
	}
};

processLaptops();
