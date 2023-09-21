// Asynchronous code

//setInterval
//clearInterval
//setTimeout
//clearTimeout
const myInterval = setInterval(() => console.log('Hello!'),1000);

setTimeout(()=> clearInterval(myInterval),5000);

clearTimeout();


// In asynchronous JS there is a time delay in the completion of the tasks for different lines of code.

//Data Fetching
//callback

const fetchUser = (user, callbackFunc) => {
    setTimeout(()=>{
        callbackFunc({user});
    },5000);
}

fetchUser('Dew', (user)=>{
    console.log(`You now have the user ${user.user}`);
})


// Promises

// async and await