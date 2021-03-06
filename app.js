var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//copywithin, reduce, 
//Not defined Arrays -- sysetem defines the type at the time of generation
var namesLst = ["tom", "harry", "ravi"]; // automatically considers string array
console.warn(namesLst);
//namesLst.push(100);  as system considers array as string so numbers are not allowed.
var age = [1, 2, 21, 56, 76, 89]; // automatically considers number array
age.push(122, 120);
age.pop(); // removes last element from array
console.warn("Age " + age);
//age.push("ram"); not assignable to numbers array
var mixed = [1, 1, "ram"]; //automaically considers string and numbers arrays but bools are not allowed
mixed.push("sham");
console.warn(mixed);
//mixed.push(true)
var mix = mixed.concat(age);
console.log("mix =" + mix);
//Defined Arrays -- User defines the type at the time of generation
var ages = [1, 2, 3, 4, 5, 6];
var z = ages.toString();
console.warn("z = " + z);
var totalAge = age.concat(ages);
console.warn(totalAge);
//returns true if all elements satisfy the condition
var everyy = ages.every(function notFive(element, index, array) {
    return (element < 7);
});
console.warn(everyy);
console.warn(ages);
var names = ["ram", "sham", "ravi", "tom", "harry", "meera", "deep"];
//let no: number[] = age.concat(names); -- works only for arrays with same datatype
//names.copyWithin(5,0,3); 
console.warn(names);
//mixed array and array methods
var employee = [1, "ram", "mumbai", 20000];
employee.push(7, 8);
//employee.reverse();
var shiftMethod = employee.shift(); // removes first elemt permenantly----------unshift() adds element at the start
console.warn("Sshifted Value " + shiftMethod);
var slicesValue = employee.slice(0, 2); //returns the range of elemts but doesnot removes it from array
console.warn("slices value " + slicesValue);
var spliceValue = employee.splice(1, 2); //deletes range of elements from the array permenantly
console.warn("Splice value :" + spliceValue);
console.warn(employee);
//some returns boolean
var eSome = employee.some(function isName(element, index, array) {
    if (element == "ram") {
        console.warn("Hello ram " + element + " " + index + "  " + employee);
        return element;
    }
});
console.warn(eSome);
var mixmix = employee.concat(mix);
console.warn(mixmix);
console.warn(employee);
var so1 = [1, 2, 3, 4, 5, 6, 7];
var so2 = __spreadArrays(so1, [11, 12, 13, 14, 15]);
console.warn("so2 :" + so2);
var soEx = __spreadArrays(so1, so2);
console.warn(soEx);
