const fs = require('fs');

function binarySearch(word, wordList) {
    let left = 0;
    let right = wordList.length - 1;
    let steps = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentWord = wordList[mid].toLowerCase().replace('-', '');

        console.log(currentWord);

        if (currentWord === word) {
            return { index: mid, steps };
        } else if (currentWord < word) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        steps++;
    }
    return { index: -1, steps };
}

const wordList = fs.readFileSync('words_utf.txt', 'utf-8').split('\n');

const searchWord = 'яхта';

const result = binarySearch(searchWord, wordList);

console.log(`Слово: ${searchWord}`);
console.log(result.index === -1 ? `Не найдено.` : `Находится на позиции: ${result.index}\nКоличество шагов итерации: ${result.steps}`);

/**
 * ящик
 * абак
 * ящерица
 * кукуруза
 * комарик
 * киоск
 * як - not found register
 * яхта - not found
 */