gforce = ()=> {
    console.log("starement 1");
}
setTimeout(()=> {
 console.log("statement 2");
},3000)
console.log("statement 3");
setInterval(() => {
    console.log("Doing it");
},2000)
console.log("statement 4");
gforce();
console.log("statement 4");

