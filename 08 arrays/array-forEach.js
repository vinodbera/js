console.log("Array forEach");

const forEachMonths = ['January', 'Feb', 'March', 'April', 'May'];

// forEach(callback function); forEach doesn't return anything

forEachMonths.forEach((month) => (console.log("Month: ", month)));

// it can be written this way as well

const monthList = (month) => {
    console.log(month);
}

forEachMonths.forEach(monthList);