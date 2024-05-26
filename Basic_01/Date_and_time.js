const myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(new Date(2024, 2, 23).toDateString()); // Sat Mar 23 2024
console.log(new Date(2024, 2, 23, 15, 20, 59).toLocaleString()); // 3/23/2024, 3:20:59 AM
console.log(new Date("2024-01-10").toLocaleString()); // 1/10/2024, 5:00:00 AM
console.log(new Date("11-25-2022").toLocaleString()); // 11/25/2022, 12:00:00 AM


const timestampDate = new Date("01-14-2023")
const myTimeStamp = Date.now()

console.log(myTimeStamp/1000) // Seconds
console.log(Math.floor(myTimeStamp/1000)) // Milliseconds to Seconds
console.log(timestampDate.getTime()/1000) // Milliseconds to Seconds
