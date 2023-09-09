console.log("Strings")

const single = 'Single Quotes';
const double = "Double Quotes";
const backticks = `Backticks`;

console.log(single, double, backticks);

//Length

console.log(single.length);
console.log(double[0], double[double.length-1]);

//Lowercase Uppercase

const mixedCase = "Hello! How are you?";

const lowercaseString = mixedCase.toLowerCase();   //toLowerCase and toUpperCase are methods and hence the ()
const uppercaseString = mixedCase.toUpperCase();

console.log(lowercaseString);
console.log(uppercaseString);

// Searching for a substring

const hobbies = "I love HTML, CSS, JavaScript and also JavaScript.";

// indexOf()

const firstIndex = hobbies.indexOf('JavaScript');  //Returns the index of first occurence
console.log(firstIndex);

// lastIndexOf()

const lastIndex = hobbies.lastIndexOf('JavaScript');  //Returns the index of last occurence
console.log(lastIndex);

// includes()

const ifIncludes = hobbies.includes('JavaScript'); //Returns true or false
console.log(ifIncludes);

// startsWith()

const doesStartWith = hobbies.startsWith('Hello');
console.log(doesStartWith);

// endsWith()

const doesEndWith = hobbies.endsWith("JavaScript.");
console.log(doesEndWith);


// getting substring

//slice

let substring = hobbies.slice(18,28);
console.log(substring);

substring = hobbies.slice(0,11);
console.log(substring);

substring = hobbies.slice(0);
console.log(substring);

// split strings

//split()  returns an array of characters or strings

let splittedString = hobbies.split(''); //splits all characters because in the parameter nothing is given
console.log(splittedString);

splittedString = hobbies.split(' '); //splits words as we have put a space in the parameter which says split after every space
console.log(splittedString);

//reversing a string

// reverse() and join() does not work for strings. They are array methods.

let stringToBeReversed = "JavaScript";

// using split first we split the string into characters which are stored in array and then using array method reverse we reverse the array and using join we join it again.
let reversedString = stringToBeReversed.split('').reverse().join('');
console.log(reversedString);

// repeat
console.log(hobbies.slice(18,28).repeat(6));

// trim  used to trim whitespaces

const whitespacesString = "     Hey. How are you?      ";
console.log(whitespacesString);
console.log(whitespacesString.trim());

// Exercise

const guestList = "Our guests are: emma, jacob, isabella, ethan";

//getting length of the string
console.log(guestList.length);

const upperCaseGuestList = guestList.toUpperCase();
console.log(upperCaseGuestList);

const isETHAN = upperCaseGuestList.includes('ETHAN');
console.log(isETHAN);

const substringGuests = upperCaseGuestList.slice(upperCaseGuestList.indexOf('EMMA'));
console.log(substringGuests);

const guests = substringGuests.split(', ');
console.log(guests);