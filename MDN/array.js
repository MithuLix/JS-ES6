// Replace multiple items in an array
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana'];
const start = -2;
const deleteCount = 2;
const removedItem = fruits.splice(start, deleteCount, 'kiwi', 'mango');
console.log(fruits);   
console.log(removedItem);
console.log('----------------------');

// Iterate over an array
for (const fruit of fruits) {
    console.log(fruit);
}
console.log('----------------------');


// Call a function on each element in an array
fruits.forEach(function(item, index, array) {
    console.log(item, index);
})
console.log('----------------------');


// Using an array to tabulate a set of values
const values = [];
for (let i = 0; i < 10; i++) {
    values.push([
        2 ** i, 
        2 * i ** 2,
    ]);
}
console.table(values);



const foo = ['one', 'two', 'three'];
