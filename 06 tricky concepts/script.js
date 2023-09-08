console.log("Tricky Concepts");

//Global Scope

const globalName = "Dew";

const logName = () => {
    console.log(globalName);
}

logName();

// Local/function scope

let logNameLocal = () => {
    let localName = "Dew";
    console.log(localName," inside the function");
    console.log(globalName, "the global variable");
}

logNameLocal();
// the localName is not accessible outside the function;
// console.log(localName, "outside the function");

//Similar to function scope, the block scope means thw variable isn't accessible outside of the block it is declared in.

//Hoisting
// What hoisting does is it hoists all variables or functions to the top of their scopes.

console.log(hoistingVariable);

var hoistingVariable = 30;

// What happens in this is that the declaration of variable hoistingVariable is hoisted at the top of the scope.
// Thus we do not get any error and instead get undefined.
/* This is how it works
        var hoistingVariable;
        console.log(hoistingVariable);
        hoistingVariable = 30;
*/
// let and const do not allow hoisting and throw error

//Closures
console.log("Test");

const outerFunction = () => {
    const outerVar = "Dew";
    const innerFunction = () => {
        console.log(outerVar);
    }
   return innerFunction;
}

const closure = outerFunction();
closure();