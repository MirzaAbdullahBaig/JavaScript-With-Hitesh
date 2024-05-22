let score = "d33"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // Nan

/*
Notes:

"33" => 33 => (typeof => number)
"bgf33" => NaN => (typeof => number)
*/


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
Notes:

1 => true
"" => true
"abdullah" => true

*/


let someNumber = 33

let strNumber = String(someNumber)
console.log(strNumber);
console.log(typeof strNumber);