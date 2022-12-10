// access the object values by using dot (.) notation:
myObj = { "name":"John", "age":30, "car":null };
x = myObj.age;
console.log(x);

// access the object values by using bracket ([]) notation:
x = myObj['name'];
console.log(x);

//loop through object properties by using the for-in loop:
var myObj, x;
for (x in myObj) {
    console.log( x + "<br>");
}


// access nested JSON objects by using the dot notation or bracket notation:
myObj2 = {
    "name":"John",
    "age":30,
    "cars": {
      "car1":"Ford",
      "car2":"BMW",
      "car3":"Fiat"
    }
   }

    a = myObj2.cars.car3;
    console.log(a);

//    or

    b = myObj2.cars["car2"];
    console.log(b);



// delete keyword to delete properties from a JSON object:
delete myObj2.cars.car1;
console.log(myObj2);


