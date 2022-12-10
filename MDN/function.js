function factorial(n) {
    if (n === 0 || n === 1) {
        return n = 1;
    }
    else {
        return n * factorial(n - 1);
    }
}



const num1 = 20;
const num2 = 3;
const name = "John";

function multiply() {
    return num1 * num2;
}
console.log(multiply());


// a nested function 
function getScore() {
    const num1 = 2;
    const num2 = 3;
    const name = "John ";

    function add() {
        return name + 'scored = ' + (num1 + num2);
    }
    return add();
}
console.log(getScore());



// recursive function


function loop(x){
    if (x >= 10) {
        return x;
    }
    loop(x + 1); //the recursive call
}
console.log(loop(3));



function foo(i) {
    if (i < 0) {
        return ;
    }
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
}
foo(5);


function addSquare(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
const a = addSquare(3, 4);
const b = addSquare(5, 8);
const c = addSquare(6, 9);
 console.log(a, b, c);


//  multiply nestes function
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3); // 3 is the argument of C
    }
    B(2); // call B
}
A(1); // call A

