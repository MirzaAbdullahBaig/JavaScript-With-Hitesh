// Array 

// const array = [0, 1, 4, 3, 4, 5];
// const name = ["Ali", "Adil", "jalib", "Ahad", "Hamza"]

// const arr = new Array(10, 20, 30, 40)

// console.log("🚀 ~ arr:", arr)


// Array methods

// arr.push(50) // Add element to the end of the array
// arr.push(60) // Add element to the end of the array
// arr.pop() // Remove element from the end of the array

// arr.unshift(0) // Add element to the start of the array
// arr.shift() // Remove element from the start of the array

// console.log("🚀 ~ arr:", arr.includes(10)) // Boolean
// console.log("🚀 ~ arr:", arr.indexOf(30)) // Index of the element

// const newArr = arr.join();

// console.log("🚀 ~ arr:", arr) // Object
// console.log("🚀 ~ newArr:", newArr) // String


// Splice And Slice

const num = [100, 200, 300, 400, 500]
console.log("🚀 ~ num Original A:", num)

// slice returns a piece of the array but it doesn’t affect the original array.
const slicenum = num.slice(1, 3)
console.log("🚀 ~ slicenum:", slicenum)

console.log("🚀 ~ num Original B:", num)

// splice changes the original array by removing, replacing, or adding values and returns the affected values.
const splicenum = num.splice(1, 3)
console.log("🚀 ~ splicenum:", splicenum)

console.log("🚀 ~ num Original C:", num)
