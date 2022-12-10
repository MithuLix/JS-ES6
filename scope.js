//js scope
let globalVar = 'hello globalVar'; 

function local() {
    let localVar = 'hello localVar'
    console.log(localVar);

    if (true) {
        let insideIf = 'i am inside if'
        console.log(insideIf);
    } else {
        
    }
}
local();





//hoisting
function hoisting() {
    const hoistingTest = 'me the hoisting test'
    console.log(hoistingTest);
}
hoisting();




//const & let
const PI = 3.1416;
console.log(PI);


let PI2 = 3.141614;
PI2= 345;
console.log(PI2);