function addNum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
addNum(12, 43, 32);


const square = function (number) {
    return number * number;
}
const x= square(4);
console.log(x);


const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
}
console.log(factorial(120));