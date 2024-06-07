// 


const coding = ["JavaScript", "C++", "TypeScript", "Ruby", "Python"]

const myValues = coding.forEach( (item) => {
    // console.log(item)
    return item
})

// console.log(myValues);
//  map method returns nhi krta values


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     return num > 4 // return lazmi krna hy
// })

// const newNums = []

// myNums.forEach((item) => {
//     if (item > 4) {
//         newNums.push(item)
//     }
// })

// console.log("🚀 ~ newNums:", newNums)


const books = [
    { title: "Book 01", genre: "Fiction", publish: "1981", edition: "2004" },
    { title: "Book 02", genre: "Non-Fiction", publish: "1992", edition: "2008" },
    { title: "Book 03", genre: "History", publish: "1999", edition: "2007" },
    { title: "Book 04", genre: "Non-Fiction", publish: "1989", edition: "2010" },
    { title: "Book 05", genre: "Science", publish: "2009", edition: "2014" },
    { title: "Book 06", genre: "Fiction", publish: "1987", edition: "2010" },
    { title: "Book 07", genre: "History", publish: "1986", edition: "1996" },
    { title: "Book 08", genre: "Science", publish: "2011", edition: "2016" },
    { title: "Book 09", genre: "Non-Fiction", publish: "1981", edition: "1989" }
]

// const userBooks = books.filter((item) => item.genre === "History")
const userBooks = books.filter((item) => {
    return item.publish >= 1995 && item.genre === "History"
})
// console.log("🚀 ~ userBooks:", userBooks)
