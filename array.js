var obj, a;
obj = {
    "name":"John",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
    };

x = obj.cars[1];
console.log(x);


// access array values by using a for-in loop:
for ( i in obj.cars) {
    a+= obj.cars[i];
    }
console.log(a );


//using for loop:
for (let i = 0; i < obj.cars.length; i++) {
    const x2 = obj.cars[i];
    console.log(x2);
}



// Nested Arrays in JSON Objects
// Values in an array can also be another array, or even another JSON object:
myObj = {
    "name":"John",
    "age":30,
    "cars": [
      { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
      { "name":"BMW", "models":[ "320", "X3", "X5" ] },
      { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
   }


for (const i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (const j in myObj.cars[i].modals) {
        x+= myObj.cars[i].modals[j];
        }
  }
console.log(x);



// Modify Array Values
// Use the index number to modify an array:
