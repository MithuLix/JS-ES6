var txt = '{"name" : "Jhon", "birth": "1997-02-03", "city": "New York"}';
var obj = JSON.parse(txt);
obj.name = new Date(obj.name);
console.log(obj.name + " " + obj.birth);


var txt = {name : "Jhon", birth: "1997-02-03", city: "New York"};
var myJSON = JSON.stringify(txt);
console.log(myJSON);


var xr  = {name : "Jhon", today: new Date(), city: "New York"}
var xrc = JSON.stringify(xr);
console.log(xrc);



// JSON.stringify() function will remove any functions from a JavaScript object
var xrx  = {name : "Jhon", today: new Date(), city: function () {return 30;}}
var xrcc = JSON.stringify(xrx);
console.log(xrcc);



//if you convert your functions into strings before running the JSON.stringify() function will be omitted.
var obj2  = {name : "Jhon", today: "2020-12-22", city: function () {return 30;}}
obj2.city = obj2.city.toString();
var result = JSON.stringify(obj2);
console.log(result);