console.log("Operators and Equality");

//Arithmetic Operators
const a = 5;
const b = -10;
let result = null;

result = a+b;
console.log(result);

result = a-b;
console.log(result);

result = a*b;
console.log(result);

result = a/b;
console.log(result);

result = a%b;
console.log(result);

result = b**a;
console.log(result);

result++;
console.log(result);

result--;
console.log(result);

//Comparison Operators

// greater than >, greater than equal to >=, less than <, less than equal to <=

console.log(a>b, a>=b, a<b, a<=b);

//Equality 
//Loose equality (Doesn't compare datatypes)

console.log(a==b, a!=b);
console.log(5=='5');

//Strict equality (compares values and datatypes)

console.log(a===b, a!==b);
console.log(5==='5');

//Loose equality should always be avoided as it can cause the program to behave in weird ways.

//Logical Operators

// AND &&, OR ||, NOT !

console.log(true && true && false);
console.log(true || false || false);
console.log(!(true && true && false));

//Assignment operators

let number = 7;
number += 3;
console.log(number);
number -= 3;
console.log(number);
number *= 3;
console.log(number);
number /= 3;
console.log(number);

let string = "Hello,";
string += "how are you?";
console.log(string);
