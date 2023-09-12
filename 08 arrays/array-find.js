console.log("Array Find");

//array.find(); returns the first value that satisfies the condition

const numbersFind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const returnedFromFind = numbersFind.find((number)=> number%2===0);
console.log(returnedFromFind);   //just returns the first value satisfying the condition

const words = ['dog', 'cat', 'tiger', 'lion', 'deer']

const word = words.find((word)=>word.startsWith('t'));
console.log(word);

