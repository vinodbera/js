console.log("Welcome to variables");
var variableName = 'This is a variable.';
console.log(variableName);

//After ES6 we can declare in two other ways as well.
// First is using "let". Let is similar to "var" but has additional scopes and it is the preferred way to declare variables in modern JS.

let var1 = "This has been declared using let.";

//Second is using "const". This is assigned to data which cannot and will not change the value throughout the program.

const var2 = "This has been declared using const.";

console.log("var1:",var1,"var 2:",var2);

// String

/*
Strings can be of three types in JS
(i) single quotes ''
(ii) double quotes ""
(iii) backticks ``

Single quotes and double quotes are exactly the same and any of them can be used at any point of time.
Backticks are used when we have to embed some other variable or expression in the string.
*/

const singleQuotes = 'Hello!';
const doubleQuotes = 'How are you?';
const backticks = `${singleQuotes} I'm good.`;

console.log(singleQuotes, doubleQuotes);
console.log(backticks);

//typeof can be used to know the type of any variable.

console.log(typeof singleQuotes, typeof doubleQuotes, typeof backticks);

//Numbers

//In JS we don't need to assign datatypes to numbers like int, float, etc.

const number1 = 5;
const number2 = 10;
var result = ((number1 + number2)/number1)*number2;
console.log(result);
console.log(typeof result);
const string = 'Hello';
result = string/number1;
console.log(result); //NaN = Not a Number
console.log(typeof result);

//Booleans

//Either true(1) or false (0)

const boolExample = true;
if(boolExample){
    console.log("Hey man!");
} else {
    console.log("Hey...");
}

const testNum = 8;
console.log(testNum > 10);

//Null and undefined

/*
Null is assigned by user. It means the value is nothing or unknown.
Undefined is assgined by the language itself to any variable which hasn't been assigned anything or not defined yet.
*/

var typeNull = null;
var typeUndefined;

console.log(typeNull, typeUndefined);
console.log(typeof typeNull);  //Although null is a basic datatype, it still shows up as "object". This is because of a bug in earlier versions of JS. It wasn't fixed in later versions as fixing it would have broken down a lot of websites.
console.log(typeof typeUndefined);

//Object

/*
Objects are complex datatypes and can be used to group together different datatypes or variables.
*/

const person = {
    name: 'Dew',
    age : 32,
}

console.log(person, typeof person);
console.log(person.name, typeof person.name);

const arr = [1,2,3,4];
console.log(arr, typeof arr);
console.log(arr[0], typeof arr[0]);

const date = new Date();
console.log(date, typeof date);

//JS is a dynamically type and not statically typed language. This means the data type of a variable isn't known at the compilation time.

let checkVar = 'Hello';
console.log(checkVar, typeof checkVar);
checkVar = 10;
console.log(checkVar, typeof checkVar);
