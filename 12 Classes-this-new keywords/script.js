// new keyword
// creates a new object

const person1 = new Object();
const person2 = {};

/*
Both are same (second one is just the shorter syntax) but we need "new" keyword because there are certain 
objects for which there are no literal syntax.
*/


//this keyword

function carFactory(car,color) {
    this.car = car;
    this.colour = color;

    console.log(this);
}

const blackCar = new carFactory('NiceCar', 'Black');


//class
// a class is a schema for an object that can save many values

const person = {
    name:'Dew',
    age:'24',
    isWorking: true,
}

class Person {
    constructor(giveName, giveAge, giveIsWorking){
        this.name = giveName;
        this.age = giveAge;
        this.isWorking = giveIsWorking;
    }
}

const user = new Person('Dew', 25, true);

console.log(user);