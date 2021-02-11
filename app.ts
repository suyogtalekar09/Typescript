//copywithin, reduce, 
//Not defined Arrays -- sysetem defines the type at the time of generation
let namesLst = ["tom", "harry", "ravi"]; // automatically considers string array
console.warn(namesLst);
//namesLst.push(100);  as system considers array as string so numbers are not allowed.

let age = [1,2,21, 56,76,89]// automatically considers number array
age.push(122,120);
age.pop(); // removes last element from array
console.warn("Age "+age);
//age.push("ram"); not assignable to numbers array

let mixed = [1,1,"ram"] //automaically considers string and numbers arrays but bools are not allowed
mixed.push("sham");
console.warn(mixed);
//mixed.push(true)
let mix: any[] = mixed.concat(age);
console.log("mix =" + mix);
//Defined Arrays -- User defines the type at the time of generation

let ages: number[] = [1,2,3,4,5,6];
let z:string = ages.toString();
console.warn("z = " +z);
let totalAge: number[] = age.concat(ages);
console.warn(totalAge);
//returns true if all elements satisfy the condition
let everyy = ages.every(function notFive (element, index, array) {
    return(element < 7)
});
console.warn(everyy);

console.warn(ages);

let names: string[] = ["ram", "sham","ravi","tom","harry","meera","deep"];
//let no: number[] = age.concat(names); -- works only for arrays with same datatype
//names.copyWithin(5,0,3); 

console.warn(names);

//mixed array and array methods
let employee: any[] = [1,"ram", "mumbai",20000];

employee.push(7,8);
//employee.reverse();
let shiftMethod = employee.shift(); // removes first elemt permenantly----------unshift() adds element at the start
console.warn("Sshifted Value "+shiftMethod);
let slicesValue = employee.slice(0,2); //returns the range of elemts but doesnot removes it from array
console.warn("slices value " +slicesValue);
let spliceValue = employee.splice(1,2); //deletes range of elements from the array permenantly
console.warn("Splice value :"+ spliceValue);
console.warn(employee);
//some returns boolean
let eSome = employee.some(function isName(element, index, array) {
    if(element == "ram"){
    console.warn("Hello ram "+ element+" " + index+"  "+employee);
        return element;
    }
});
console.warn(eSome);
let mixmix: any[] = employee.concat(mix);
console.warn(mixmix);

console.warn(employee);






