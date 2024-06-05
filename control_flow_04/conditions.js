const isLoggedIn = false
const temperature = 41

if (3 != 2) {
    // console.log("Executed");
}


if (temperature <= 50) {
    // console.log("less than 50");
} else {
    // console.log("greater than 50");
}
// console.log("executed");


const score = 200

if (score > 100){
    const power = "Fly"
    // console.log(`User Power: ${power}`);
}

// console.log(`User Power: ${power}`); // Scoed Issues


const balance = 1001

// if (balance > 500) console.log("test"), // comma syntax || Not Recommended


if (balance <= 500) {
    // console.log("Balance is less than 500");
} else if (balance <= 750) {
    // console.log("Balance is less than 750");
} else if (balance <= 900) {
    // console.log("Balance is less than 900");
} else {
    // console.log("Balance is greater than 1000");
}


const userLogin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLogin && debitCard && 2==3) {
    // console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail && debitCard && 2==2) {
    // console.log("Allow to buy courses");
}

