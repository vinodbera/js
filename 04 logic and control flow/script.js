console.log("Logic and Control flow");

// if, else if and else

const age = 18;

if (age > 18) {
    console.log("You may vote!");
} else if (age === 18) {
    console.log("Congrats! You just turned 18. You may vote.");
} else {
    console.log("Oops! you aren't old enough to vote.");
}

/*
Truthy and falsy values
Falsy --> false, 0, '', null, undefined, NaN
Truthy --> All other values other than falsy. true,1,'any string', any number, {}, []
*/

const dogs = 1;

if (dogs) {
    console.log(`You have ${dogs} dog(s).`);
} else {
    console.log ("You have no dog.")
}

//Logical Operators part 2

console.log('hello'&& 65 && true && {}); //&& is going to return the last truthy value if the expression is true
console.log('hello'&& '' && true && {}); //&& is going to return the first falsy value if the exression is false
//This is because in case of AND, for the expression to be true all values need to be checked and for the expression to be false it needs to check till only the first false value.

console.log('hello' || 65 || true || {}); // || is going to return the first truthy value if the expression is true
console.log(null || '' || false || undefined); // || is going to return the last falsy value if the exression is false
//This is because in case of OR, for the expression to be true it needs to check till only the first true value and for the expression to be false all values need to be checked.

console.log(!('' || true)); // NOT just returns if the NOT of the expression is truthy or falsy.
console.log(!!{}); // NOT of NOT returns whether the expression is truthy or falsy

// Switch Statements

const yourName = 'Jack';

switch (yourName) {
    case 'Dew':
        console.log("Hello Dew.");
        break;
    case 'John':
        console.log("Hello John");
        break;
    case 'Jane':
        console.log("Hello Jane");
        break;
    default:
        console.log("I don't know you.");
        break;
}

// Ternary Operator
// condition ? if true : if false

const yourAge = 15;

yourAge >= 18 ? console.log("You can drive.") : console.log("You cannot drive.")

// While loop

let i = 0;
while(i<10){
    console.log(i);
    i++;
}

//for loop
let j;
console.log(j);
for (j = 0; j<10; j++){
    console.log(j);
}