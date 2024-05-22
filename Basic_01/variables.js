// Let, const and var ki kahani | chai aur #javascript

const accountID = 144553;
let accountEmail = "abdullah@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountID = 2 // Not Allowed

accountEmail = "abelson@gmail.com"
accountPassword = "3478932"
accountCity = "3478932"

console.log(accountEmail);

/*
prefer not to use "var"
beacue of isse in block scope and not functinal scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])