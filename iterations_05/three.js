// for of loop

const arr = [2, 4, 6, 8, 10]

for (const num of arr) {
    // console.log(num);
}


const greetings = "Hello Abdullah, How Are You?"
let space = 0
for (const greet of greetings) {
    
    if(greet == " "){
        space++
        continue;
    }
    if(space > 2){
        // console.log("loop  Break!");
        break;
    }
    // console.log(greet);
}
// console.log(space);


/*
map => The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
*/


const map = new Map();
map.set(1, "Abdullah");
map.set(2, "Adil");
map.set(3, "Ahad");
map.set(4, "Ahad");

// console.log(map);
// console.log(map.get(1))

map.set(1, "Hamza")
// console.log(map.get(1))

// console.log(map.size)

// map.delete(3)
// console.log(map.size)

for (const [key, value] of map) {
//    console.log(key, ':-', value)
}

// Object for of loop sy iteratable nhi hn

const myObj = {
    name: "Abdullah",
    age: 20,
    fatherName: "Iftikhar"
}

// for (const [key, value] of myObj) {
//     // console.log(key, ':-', value) // Error message => myObj is not iterable
// }