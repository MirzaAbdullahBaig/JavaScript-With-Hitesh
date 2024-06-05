const userEmail = "user@example" // Truthy Value

if (userEmail) {
    console.log(`Got user email: ${userEmail}`);
} else {
    console.log("Don't have a user email");
}

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Turthy Values
// "0", 'false', " ", [], {}, function(){}


// array Checking syntax

const arr = []

if (arr.length === 0) {
    console.log("Array is empty");
}

const obj = {}

if (Object.keys(arr).length === 0) {
    console.log("Object is empty");
}

false == 0 // true
false == '' // true
0 == '' // true