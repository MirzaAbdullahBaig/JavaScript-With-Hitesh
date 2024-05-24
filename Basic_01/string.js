const name = "Abdullah"
const repo = 50

// console.log(name + repo + " Github repo"); // Bad syntax || Not Recommended

// console.log(`${name} ${repo} Github repo`); // Good syntax || Higly recommended 


const playerName = new String('Abdullah')

console.log(playerName);
console.log(playerName.length);
console.log(playerName[0]);
console.log(playerName.__proto__);

console.log(playerName.toUpperCase());
console.log(playerName.charAt(6));
console.log(playerName.indexOf('l'));
console.log(playerName.normalize());
console.log(playerName.substring(0, 4));
console.log(playerName.slice(2, 4)); // last value exclusive

console.log("   Hello World!   ".trim());

const word = "https://www.google.com%20/Abullah"
console.log(word);
console.log(word.replaceAll('%20', ''));
console.log(word.includes('google'));
console.log(word.split("").reverse().join(""));