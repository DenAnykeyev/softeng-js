Array.prototype.getIndexElement = function(element, start = 0, end = this.length - 1) {
    if (start > end) {
        return -1;
    }
    
    let mid = Math.floor((start + end) / 2);
    
    if (this[mid] === element) {
        return mid;
    } else if (this[mid] < element) {
        return this.getIndexElement(element, mid + 1, end);
    } else {
        return this.getIndexElement(element, start, mid - 1);
    }
};
    
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
console.log("\n\n\n");
console.log(arr.getIndexElement(6));
console.log(arr.getIndexElement(11));