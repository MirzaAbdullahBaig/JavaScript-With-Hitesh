/*
Singleton => Constructor sy jo object bny ga wo Singleton object bny ga
syntax => Object.create => constructor method, esi method ky through singleton bnta hy

Literal sy singleton object nhi bny ga
*/


// Objects Literals
const sym = Symbol("sdsd")

const user = {
    name: "Abdullah",
    "friend Name": "Adil",
    age: 18,
    [sym]: "Ahad",
    location: "Karachi",
    email: "aba@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Tuesday"]
}

// console.log(user.name);
// // console.log(user.friend Name); // no chance to find the value beacuse of wrong syntax
// console.log(user["friend Name"]);
// console.log(user[sym]); // Symbol value
// console.log(typeof user[sym]); // String
// console.log(typeof sym); // Symbol

user.email = "abaig@gmail.com";
// console.log("🚀 ~ email:", user.email)

Object.freeze(user.email);

user.isLoggedIn = true;
// console.log("🚀 ~ user:", user)

user.greeting = function () {
    console.log("Hello User!");
}

user.greeting2 = function () {
    console.log(`Hello User! ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());