class Queue {
    constructor() {
        this.array = [];
    }
    
    /**
     * Распечатать массив
     */
    print() {
        console.log(this.array);
    }
    
    /**
     * Добавить в конец очереди
     * Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
     */
    enqueue (value) {
        return this.array.push(value);
    }
    
    /**
     * 
     * @returns 
     * Вывести с начала очереди
     * Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
     */
    dequeue() {
        return this.array.shift();
    }
    
    /**
     * 
     * @returns bool
     * Проверить очередь на пустоту
     */
    isEmpty() {
        return this.array.length === 0;
    }
    
    /**
     * @returns int
     * Вернуть с вершины, не меняя стек
     */
    size() {
        return this.array.length;
    }
}

const q = new Queue();

// доб в кон очереди
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log("Декуем = " + q.dequeue());
q.print();

console.log("Декуем = " + q.dequeue());
q.print();


console.log("Декуем = " + q.dequeue());
q.print();

console.log(q.isEmpty());

console.log(q.size);