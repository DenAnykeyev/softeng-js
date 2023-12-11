/**
 * Задание:
 * 1. получить из url-адреса массив объектов
 * 2. преобразовать (упростить) объекты, выбрав только поля id, name, phone, city:
 * 3. отсортировать массив обновлённых объектов по полю name
 * 4. сохранить полученный массив в виде json-файла в текущей папке
 */

const request = require('request');
const fs = require('fs');

const url = 'http://files-pcoding.1gb.ru/json?filename=users.json';

/**
 * Объявление функции получения из url-адреса пользователей
 * и последующее преобразование их к объекту Promise
 * @returns Promise
 */
const getUsers = () => {
	return new Promise((resolve, reject) => {
		request(url, (error, response, body) => {
			if (error || response.statusCode !== 200) {
				reject(error || new Error(`Статус: ${response.statusCode}`)); // go error?
			} else {
				const users = JSON.parse(body); // Преобразуем полученные данные в массив объектов
				resolve(users); // Возвращаем полученный массив объектов через resolve
			}
		});
	});
};

/**
 * Объявление функции преобразования данных пользователей
 * @returns void
 */
const processUsers = async () => {
	try {
		// Получаем Promise object наших пользовтелей
		const users = await getUsers();
		// Выбираем только поля id, name, phone, city:
		const processedUsers = users.map(({ id, name, phone, address }) => ({
			id,
			name,
			phone,
			city: address.city,
		}));
		// Сортируем список по полю name
		const sortedUsers = processedUsers.sort((a, b) => a.name.localeCompare(b.name));
		// Сохраняем результат в виде json файле
		fs.writeFileSync('out\\task1.json', JSON.stringify(sortedUsers));
	} catch (error) {
		console.error(error);
	}
};

// Выполняем функцию proccessUsers
processUsers();