/*const id =document.getElementById("demo").innerText;
console.log(id);

const classP =document.getElementsByClassName("demo1").innerHTML;
console.log(classP);

const classQ = document.querySelector('.demo1').innerHTML;
console.log(classQ);
document.write(classQ)


// bulb
function light(show) {
    var pic;
    if(show == 0){pic = 'pic_bulboff.gif';} else{pic = 'pic_bulbon.gif';}
    document.getElementById("bulb").src = pic;
}
*/


// let i =5;
// for (let i = 0; i < 10; i++) {
// }
// console.log(i);


// hoist = "mithu";
// document.getElementById("hoist").innerHTML = hoist;
// var hoist;

// const PI = 3.1415;
// const PI2;
// PI2 = PI * PI;
// console.log(PI2);


var num = 23;
var txt = "";
while (num != Infinity){ 
    num = num * num;
    txt = txt + num + "\n";
}
console.log(txt);
console.log(num/0);

var num2 = 23;
num2.toString(2); console.log(num2);

var num3 =new Number(23); console.log(typeof(num3));
var num4=  23; console.log(typeof(num4));

console.log(num3 === num4);



// number methods
var num5 = 9.656;

// toExponential
console.log(num5.toExponential());
console.log(num5.toExponential(2));
console.log(num5.toExponential(4));

// tofixed
console.log(num5.toFixed(0));
console.log(num5.toFixed(2));
console.log(num5.toFixed(4));

//toPercision
console.log(num5.toPrecision(2));
console.log(num5.toPrecision(4));

console.log(num5.valueOf());

console.log(parseFloat(2.456));
console.log(parseInt(2.656));



console.log(Number(new Date("2017-04-12")));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);


console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);