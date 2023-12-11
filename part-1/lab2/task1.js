class Stack {
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
    * @param {int} value
    * Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.
    */
    push(value) {
        return this.array.push(value);
    }
    
    /**
    * @returns int
    * Метод pop() удаляет последний элемент из массива и возвращает его значение.
    */
    pop() {
        return this.array.pop();
    }
    
    /**
    * @returns int
    * Вернуть с вершины, не меняя стек
    */
    peek() {
        // return this.array[this.array.length - 1];
        return this.array.at(-1);
    }
    
    /**
    * @returns int
    * Вернуть размер
    */
    size() {
        return this.array.length;
    }
}
    
const st = new Stack();
    
// Пушим
st.push(1);
st.push(2);
st.push(3);

console.log("Пикаем = " + st.peek());

console.log("Попаем = " + st.pop());
console.log("Результат попа = "); st.print();

console.log("Размер = " + st.size());