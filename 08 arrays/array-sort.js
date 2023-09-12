console.log("Array Sort");

// array.sort(); it sorts an array of strings alphabetically. It mutates the original array

const toBeSorted = ['Anne', 'Ami', 'Dew', 'Bob', 'Carl'];
toBeSorted.sort();
console.log(toBeSorted);

// sort() simply does not sorts numbers. It just compares the first digit and returns sroted array as per the first digit which does not always gives us sorted array.
// like in 2,5,12,1     it'll return 1,12,2,5

// to sort numerical arrays, we need to use the following method

const numbersSort = [1,9,15,25,45,35,7,6,2,0,6,4];
numbersSort.sort((a,b)=>a-b); // to sort in ascending order
console.log(numbersSort);
numbersSort.sort((a,b)=>b-a); // to sort in descending order
console.log(numbersSort);