console.log("Some and every");

const arr = [1 ,5, 7, 9, 5, 3, 6, 4];

// some(); returns true if some elements satisfy the provided condition
console.log(arr.some((element)=>element>3));

// every(); returns true if all elements satisfy the given condition
console.log(arr.every((element)=>element>3));