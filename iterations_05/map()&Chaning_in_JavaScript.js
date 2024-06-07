// map() and Chaning in JavaScript

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map() Method
// const newNums = myNums.map((num) => {return num + 10})

// forEach() Method
// const newNums = []
// myNums.forEach((num) => newNums.push(num + 10))

// Filter() Method
// const newNums = []
// myNums.filter((num) => newNums.push(num + 10))

// console.log("🚀 ~ newNums:", newNums)


// Chaining In JavaScript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = nums
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num) => num >= 40)

// console.log("🚀 ~ newNums:", newNums)

