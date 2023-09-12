console.log("Array Map");
 // Array Map
 // it is similar to forEach but it does return values
 const numbers = [1,2,3,4,5,6,7,8,9];

 const squares = numbers.map((number) => number*number);
 console.log(numbers);
 const forEachSquares = numbers.forEach((number) => console.log(number*number));
 console.log(squares);  // returns values
 console.log(forEachSquares);  // doesn't return anything