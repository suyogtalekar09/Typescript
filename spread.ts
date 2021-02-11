
console.log("Spread Operators") // used for spreading array or obj
var so1: any[] = [1,2,3,4,5,6,7];
var so2: any[] = [...so1,11,12,13,14,15]; //[so1,11,12,13,14,15] -- puts entire array at 1st position 
console.warn("so2 :" + so2);
var soEx: any[] = [...so1 , ...so2];
console.warn(soEx);


var obj = {
    a: 'ram',
    b: 'sham',
    c: 'tom'
}

var obj1 = {
    ...obj,
    d: 'harry',
    e: 'kim'
}

console.warn(obj1);


console.log("Rest Operator") // used for catching all the parameters of the funtion

function sum(...s): void {
    console.log(s);
}
sum(1,2,3,4,"ravi",...so2,...so1);