var a = 234, b = 374, c = 423;

var maxNum = Math.max(a, b, c);
console.log(maxNum);



if (a > b) {
    if (a > c) {
        console.log('a is grater than b, c');
    } else {
        console.log('c is grater than a, b');
    }
} else {
    if (b > c) {
        console.log('b is grater than a, c');
    } else {
        console.log('c is grater than a, b');
    }
}