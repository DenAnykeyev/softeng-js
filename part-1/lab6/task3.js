/**
 * Кто-то написал парсер данных с сайта WB, Вам нужно обработать полученные ранее данные.
 * Данные находятся по адресу:
 * http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json
 * Задание:
 * Написать функцию, которая:
 * 1. на вход получает название бренда (например, lenovo)
 * 2. загружает данные из url-адреса
 * 3. фильтрует список товаров по бренду
 * 4. формирует массив объектов, выбирая только такие, которые в качестве типа накопителя содержат SSD-диск
 * 5. далее упрощает объекты, оставляя только такие поля:
 * 5.1. название
 * 5.2. бренд
 * 5.3. текущая цена продажи
 * 5.4. диагональ экрана
 * 5.5. разрешение экрана
 * 5.6. объём оперативной памяти
 * 5.7. объём SSD
 * 5.8. тип матрицы
 * 6. сортирует объекты по возрастанию цены
 * 7. сохраняет массив объектов в выходной csv-файл 
 * с соответсвующими заголовками (в качестве разделителя выбрать символ ';')
 * 
 * Для удобства отдельные подзадачи функции можете оформить в виде самостоятельных функций 
 * (например, сохранение массива объектов в csv-файл, упрощение обекта, загрузка из url-адреса).
 */

const request = require('request');
const fs = require('fs');
const csvWriter = require('csv-writer').createObjectCsvWriter;

/**
 * Объявление функции получения из url-адреса ноутбуков
 * и последующее преобразование их к объекту Promise
 * @param {string} brand 
 * @returns Promise
 */
const getLaptops = async (brand) => {
	getData = (brand) => {
		return new Promise((resolve, reject) => {
			request('http://files-pcoding.1gb.ru/json?filename=wb_laptops_popular.json', (error, response, body) => {
				if (error || response.statusCode !== 200) {
					reject(error || new Error(`Status code: ${response.statusCode}`)); // go error?
				} else {
					const laptops = JSON.parse(body);  // Преобразуем полученные данные в массив объектов
					resolve(laptops); // Возвращаем полученный массив объектов через resolve
				}
			});
		});
	}

	// Получаем коллекцию ноутбуков с адреса
	const laptops = await getData(brand);
	// Фильтруем эту коллекцию по параметру brand
	const brandFiltered = laptops.filter(item => item.brand.toLowerCase() === brand.toLowerCase());

	// Мясо...
	const preResult = brandFiltered.reduce((filteredItems, item) => {
		const options = item.prodOptions;

		// Если опции есть
		if (options) {
			const diagonalScreen = options.find(option => option.name === "Диагональ экрана");
			const screenResolution = options.find(option => option.name === "Разрешение экрана");
			const ssd = options.find(option => option.name === "Объем накопителя SSD");

			const ram = options.find(option => option.name === "Объем оперативной памяти (Гб)");
			const matrixType = options.find(option => option.name === "Тип матрицы");

			// если все нужные опции есть
			if (ssd && diagonalScreen && screenResolution && ram && matrixType) {
				// Формируем список без лишнего!
				const simplifiedLaptop = {
					name: item.name,
					brand: item.brand,
					currentPrice: item.salePriceU,
					diagonalScreen: diagonalScreen.value,
					screenResolution: screenResolution.value,
					ssd: ssd.value,
					ram: ram.value,
					matrixType: matrixType.value
				};
				filteredItems.push(simplifiedLaptop);
			}
		}

		return filteredItems;
	}, []);
	// Сортируем по возрастанию цены
	const priceSorted = preResult.sort((a, b) => a.currentPrice - b.currentPrice);

	// Выходной документ csv
	let csvContent = 'name;brand;currentPrice;diagonalScreen;screenResolution;ssd;ram;matrixType\n';
	priceSorted.forEach(laptop => {
		const { name, brand, currentPrice, diagonalScreen, screenResolution, ssd, ram, matrixType } = laptop;
		const row = `${name};${brand};${currentPrice};${diagonalScreen};${screenResolution};${ssd};${ram};${matrixType}\n`;
		csvContent += row;
	});
	fs.writeFileSync('out\\task3.csv', csvContent);
};

getLaptops("Lenovo");