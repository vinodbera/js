console.log("Value vs Reference")

// JavaScript differentiates between datatypes in two ways
// Primitive values (numbers, strings, boolean, ...)
// Complex values (objects, arrays, functions)
/*
When a variable is assigned a primitive value, it just copies that value
but when a non-primitive value is assigned, it references the variable to the address
*/

let x = 7;
let y = x;

x = 8;

/*Here both x and y point to the different memory locations.
This is why updating one does not change another one.
*/

console.log(x);   //8
console.log(y);   //7

let greetingString = "Hello";
let otherGreetingString = greetingString;

greetingString = "Hi";

/*Here both greetingString and otherGreetingString point to the different memory locations.
This is why updating one does not change another one.
*/

console.log(greetingString);      //Hi
console.log(otherGreetingString); // Hello


// For complex values, it does not work this way

let objPerson = {firstName: "Dew", age: 24};
let otherObjPerson = objPerson;

objPerson.job = "SWE";

/*Here both objPerson and otherObjPerson point to the same memory location.
This is why updating one changes another one as well
*/

console.log(objPerson);
console.log(otherObjPerson);   // Both are same although we updated just one.


let array1 = [1,2,3,4,5,6];
let array2 = array1;

array1.push(7);

/*Here both array1 and array2 point to the same memory location.
This is why updating one changes another one as well
*/

console.log(array1);
console.log(array2);    // Both are same although we updated just one.


//Cloning arrays and objects

//Shallow Cloning

//For arrays

// Method 1 - spread operator

const numArray1 = [1,2,3,4,5,6,7,8];
console.log(...numArray1);  //spread operator; it spreads elements into separate values
const newNumArray1 = [ ...numArray1];
const copiedNumArray1 = numArray1;
console.log(numArray1);
console.log(newNumArray1);
console.log(copiedNumArray1);   //All three are same

console.log(numArray1===copiedNumArray1);
console.log(numArray1===newNumArray1);

numArray1.push(9);

console.log(numArray1);
console.log(newNumArray1);       // did not get updated
console.log(copiedNumArray1);    // got updated

//Method 2 - slice()

const numArray2 = [1,2,3];
const newNumArray2 = numArray2.slice();
const copiedNumArray2 = numArray2;
console.log(numArray2);
console.log(newNumArray2);
console.log(copiedNumArray2);   //All three are same

console.log(numArray2===copiedNumArray2);
console.log(numArray2===newNumArray2);

numArray2.push(4);

console.log(numArray2);
console.log(newNumArray2);       // did not get updated
console.log(copiedNumArray2);    // got updated

//for objects

// method1 using spread operator

const obj1 = {fname: 'Dew', age: 23};
const newObj1 = { ...obj1};
const copiedObj1 = obj1;
console.log(obj1);
console.log(newObj1);
console.log(copiedObj1);   //All three are same

console.log(obj1===copiedObj1);
console.log(obj1===newObj1);

obj1.lname = 'Dewww'

console.log(obj1);
console.log(newObj1);       // did not get updated
console.log(copiedObj1);    // got updated

// method2 using assign()

const obj2 = {fname: 'Dew', age: 21};
const newObj2 = Object.assign({},obj2);
const copiedObj2 = obj2;
console.log(obj2);
console.log(newObj2);
console.log(copiedObj2);   //All three are same

console.log(obj2===copiedObj2);
console.log(obj2===newObj2);

obj2.lname = 'Dewww'

console.log(obj2);
console.log(newObj2);       // did not get updated
console.log(copiedObj2);    // got updated


// deep cloning
// shallow cloning we need to remove reference for each object separately and in cases wherein there are too many nested objects, it becomes impractical
// tbis is why we use deep cloning


// using spread (not practical for too many nested objects)
const person1 = {
    name: "Dew",
    age: 22,
    car: {
        brand: "Toyota",
        color: "black",
    }
}

const person2 = {...person1};

person2.name = "Dewwww"
person2.car.color = "White";

console.log(person1);
console.log(person2);      //car colour changed for both because we did not remove reference for the object car

const person3 = {...person1, car:{...person1.car}};

person3.name = "Tim"
person3.car.color = "red";

console.log(person1);
console.log(person3);  // this time the car colour didn't change because we removed reference from car object as well


// using JSON.stringify() and JSON.parse()

const newPerson1 = {
    name: "Trav",
    age: 22,
    car: {
        brand: "Toyota",
        color: "black",
    }
}

const stringifiedNewPerson1 = JSON.stringify(newPerson1);
console.log(stringifiedNewPerson1);
const newPerson2 = JSON.parse(stringifiedNewPerson1);
console.log(newPerson2);

newPerson2.car.color = "green";

console.log(newPerson1);
console.log(newPerson2);  // the car colours are different and we didn't have to separately remove reference from all nested objects

const newPerson3 = JSON.parse(JSON.stringify(newPerson1));
console.log(newPerson3);

newPerson3.car.color = "white";
newPerson3.name = "Ben";

console.log(newPerson1);
console.log(newPerson3);  // the car colours are different and we didn't have to separately remove reference from all nested objects