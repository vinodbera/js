console.log("Functions");

// Function Declaration
/*
Declaring a function

function name(parameters){
    body
}

Calling a function

name(arguments);
*/

function square(number){
    return number*number;
}

// Calling the function (invoking or executing the function)

console.log(square(5));
let result = square(7);
console.log(result);

/*
a function declaration
function name(parameters){
    body
}

a function expression
const name=function(parameters){
    body
}

an arrow function
const name = (parameters) => {
    body
}
*/

function sayHi (name){
    console.log(`Hello, ${name}`);
}
sayHi('Dew');

//Arrow functions 

let squareNew = (number) => {
    return number*number;
}
console.log(squareNew(6));

squareNew = (number) => number*number;
console.log(squareNew(7));

let cube = number => {
    return number*number*number;
}
console.log(cube(3));

cube = number => number*number*number;
console.log(cube(4));

// Parameters and Arguments

// Parameters are used when defining function.
// Arguments are the actual values we pass in the function when calling/invoking it

