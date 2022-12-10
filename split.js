const numbers = [1,2,3,4,5,6,7,8,9,10]  ;
const part = numbers.slice(2, 4);
const removed = numbers.splice(2,5, 64, 34, 22);
const joined = numbers.join('')

console.log(part);
console.log(removed);
console.log(numbers);
console.log(joined);