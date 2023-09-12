console.log("Array Filters");
 const arrayFilters = [5, 7, 3, -2, -7, 4, 6, 4];

 arrayFilters.filter((arrayFilterElement) => {
    return arrayFilterElement >= 0;
 });
 console.log(arrayFilters);   // returns the same array because filter() method doesn't make changes in the original array and instead copies the content into a different array

 const negativesArrayFilters = arrayFilters.filter((arrayFilterElement) => arrayFilterElement<0);
 console.log(negativesArrayFilters);

 const employees = [
    {name: 'John', overtime: 7},
    {name: 'Dew', overtime: 13},
    {name: 'Ben', overtime: 5},
    {name: 'David', overtime: 8},
];

const employeesToBeRewarded = employees.filter((employee)=>employee.overtime>=7);
console.log(employeesToBeRewarded);

const employeeNamesRewarded = employeesToBeRewarded.map((employee)=>employee.name);
console.log(employeeNamesRewarded);

employeeNamesRewarded.forEach((employee)=>(console.log(`${employee} will be rewarded.`)));