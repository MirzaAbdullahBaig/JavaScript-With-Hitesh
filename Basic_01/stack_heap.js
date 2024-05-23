// Stack Memory => In JavaScript, primitive value (such as String, Number, Boolean, null, undefined, symbol, BigInt) are stored in the stack memory

// For Example 

let name1 = "Abdullah"
let isLoggedIn1 = false
let temperature1 = null

let name2 = name1
let isLoggedIn2 = isLoggedIn1
let temperature2 = temperature1

name2 = "Ahad"
isLoggedIn2 = true
temperature1 = 10

console.table(["Stack Memory", name1, isLoggedIn1, temperature1])
console.table(["Stack Memory", name2, isLoggedIn2, temperature2])


// Heap Memory => In JavaScript, Non primitive types or Reference Types (such as Array, Objects, Functions) are stored in Heap memory 

let student1 = {
    name: "Abdullah",
    age: 18,
    class: 10,
}

let student2 = student1
student2.name = "Adil"
student2.age = 22

console.table(["Heap Memory", student1]);
console.table(["Heap Memory", student2]);