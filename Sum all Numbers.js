function total(marks) {
    var sum = 0;
    for (let i = 0; i < marks.length; i++) {
        const element = marks[i];
        sum = sum + element;
    }
    return sum;
}

var marks = [3223, 4235, 2341, 2353, 2312, 4124];
var result = total(marks);
console.log(result);