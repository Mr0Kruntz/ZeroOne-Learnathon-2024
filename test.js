function add (a,b){
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

 
let ar = [2,3,4,5,51];
let nar = ar.map(add);
console.log(nar);