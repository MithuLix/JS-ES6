function findUnique(marks) {
    var unique = [];
    for (let i = 0; i < marks.length; i++) {
        const element = marks[i];
        var index = unique.indexOf(element);
        if (index == -1) {
            unique.push(element);
        }
    }
    return unique;
}
var marks = [23, 5, 2, 3, 4, 2,3, 1, 34, 5, 23];
var result = findUnique(marks);
console.log(result);






var sentence = "I am hardworking. I am serious. I am sure I will do it";

var count = 0;

for(var i = 0; i < sentence.length; i++){

    var letter = sentence[i];

    if(count == 'a'){

        count++;

    }

}

console.log(count)