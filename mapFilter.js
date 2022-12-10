const numbers  = [2, 4, 8, 6, 3];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);



numbers.map(function (elements2) {
    console.log(elements2);
})



const result = numbers.map(x => x * x);
console.log(result);





const numbers2  = [2, 4, 8, 6, 3, 23, 55, 1, 3];
//filter
const bigger = numbers2.filter(x => x < 20);
console.log(bigger);
