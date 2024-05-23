//  # Primitive Types:
// String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scorealue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // flase

const bigNumber = 232288n
// console.log(bigNumber);
// console.log(typeof bigNumber); //bigint



// # Reference Types (Non primitive):
// Array, Objects, Functions


const cities = ["Karachi", "Lahore", "Islamabad"]

let myData = {
    name: "Abdullah",
    age: 20,
}

const Myfunction = function(){
    console.log("hello world!");
}

console.log(typeof cities); // object
console.log(typeof myData); // object
console.log(typeof Myfunction); // function
