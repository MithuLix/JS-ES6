var fs = require('fs');
var faker = require('faker');

var peoples = [];

for (var i = 0; i < 10; i++) {
    var people = {};

    people.name = faker.name.findName();
    people.email = faker.internet.email();
    people.address = {
        city: faker.address.city(),
        country: faker.address.country(),
        lat: faker.address.latitude(),
        long: faker.address.longitude(),
    };
    peoples.push(people);
}

console.log(peoples);

https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js
