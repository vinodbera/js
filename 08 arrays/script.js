console.log("Arrays");

const months = ['January', 'February', 'March', 'April'];

console.log(months[1]);
months[2] = "MARCH";
console.log(months);

const values = ["String", true, 65, () => {}, {namePerson: 'Dew', age: '27'}, 'a'];
console.log(values);
console.log(values.length);

months[6] = 'June';

for (let i=0; i < months.length; i++) {
    console.log(months[i]);
}

// array.push(); adds new element which is specified in the push parameters at the end of the array

months.push('May');
console.log(months);
let length = months.push('June');
console.log(length);  // return value of array.push() is the length of the array
console.log(months);

// array.pop; deletes the last element
months.pop();
console.log(months);
console.log(months.pop()); // returns the last element popped
console.log(months);

// array.shift(); deletes first element of an array

months.shift();  //returns the deleted element
console.log(months);  

// array.unshift(); adds the specified value to the start of an array
months.unshift('January'); // returns the length of array
console.log(months);

// array.splice(); adds or removes certain values at/from some specified position

months.splice(4,1,'May','June');  //added May at index 4, June at index 5, and removed 1 element from the immediate next index
console.log(months);

months.splice(6);  // deleted all elements from index 6 onwards
console.log(months);

// array.slice(); only keep the values in specified range and delete all others

const myFavMonths = months.slice(2,5); // will return a copy of the array with elements from index 2 to index 4(5-1)
console.log(myFavMonths);