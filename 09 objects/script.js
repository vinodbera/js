// Object is an unordered collection of related data in form of key and value pairs.

console.log("Objects");

const person = {
    firstName: 'Dew',
    age: 23,
    job: 'SDE',
}

// DOT NOTATION

console.log(person.age);        // accessing value from the object
person.education = 'BTech';     // adding value in an object
person.age = 24;          // updating value in an object
console.log(person);

// SQUARE NOTATION  its dynamic in nature

console.log(person['age']);

const property = 'firstName';
console.log(person[property]);         // it can get values dynamically

person['this is an example with spaces'] = true;  // it can also be used when keys are variable names which contain certain JS reserved words
console.log(person);


// Built in object methods
//object static methods

//Object.keys(obj)
const personDetails = Object.keys(person);
console.log(personDetails);

//Object.values(obj)
const personDetailsInfo = Object.values(person);
console.log(personDetailsInfo);

//Object.entries(obj)
const objEntries = Object.entries(person);
console.log(objEntries);
objEntries.forEach((person)=>{
    let key = person[0];
    let value = person[1];
    console.log(`${key}: ${value}`);
});

//Object.freeze(obj)   prevents modification to properties and values of an object and also prevents properties from being added or removed

const frozenPerson = Object.freeze(person);
frozenPerson.firstName = "Hello";
console.log(frozenPerson);

//Object.seal(obj)   prevents properties from being added or removed but allows modification to properties and values of an object

const person1 = {
    firstName: 'Dew',
    age: 23,
    job: 'SDE',
}
const sealedPerson = Object.seal(person1);
sealedPerson.firstName = "Hello";
sealedPerson.newProp = "abc";
console.log(sealedPerson);


// Object Methods

const objectExample = {
    value1: 'a',
    value2: 'b',
    value3: 3,
    myMethod1: () => {
        console.log("Hello")
    },
    myMethod2: function() {
        console.log(this.value1, this.value2, this.value3);
    },
}

objectExample.myMethod1();
objectExample.myMethod2();