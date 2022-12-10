console.log(this);
"use strict";
const mithu = {
    name: 'mohaiminul islam',
    qual: 'BSC in Botany',
    sum: function () {
        var add =12 + 3;
        console.log('sum of this two number is -' + add);
        console.log(this);
    }
}

mithu.sum();