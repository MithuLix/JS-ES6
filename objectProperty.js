const student = [
    {id: 21, name: 'Mithu', class: 'Honours'},
    {id: 26, name: 'Mamun', class: 'Medical'},
    {id: 29, name: 'Rakib', class: 'Eleven'}
];
const names = student.map(s => s.name); 
console.log(names);
const ids = student.map(s => s.name); 
console.log(ids);
const classes = student.filter(s => s.id>25); 
console.log(classes);
const biggerOne = student.find(s => s.id>25); 
console.log(biggerOne);