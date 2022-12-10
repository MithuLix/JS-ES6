var marks = [3223, 4235, 2341, 2353, 2312, 4124];
var max = marks[0];

for(let i = 0; i < marks.length; i ++){
    let elements = marks[i];
    if (elements > max) {
        max = elements;
    }
}
console.log(`Highest Value is: ${max}`);