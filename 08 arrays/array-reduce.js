console.log("Array Reduce");

const arrayNum = [2,5,6,8,1,4,9,6,7,3,25,0];

const arrayNumSum = arrayNum.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;}, 0);
console.log(arrayNumSum);