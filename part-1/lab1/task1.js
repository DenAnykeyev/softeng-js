Array.prototype.getIndexElement = function(element) {
    // уст границы
    let start = 0;
    let end = this.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
    
        if (this[mid] === element) {
            return mid;
        } else if (this[mid] < element) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return -1;
};
    
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("\n\n\n");
console.log(arr.getIndexElement(6)); 
console.log(arr.getIndexElement(11)); 
console.log(arr.getIndexElement(4)); 