// for each loop

const coding = ["JavaScript", "C++", "TypeScript", "Ruby", "Python"]

// Function with function keyword
coding.forEach(function (item) {
    // console.log(item);
})


// Arrow function
coding.forEach((item) => {
    // console.log(item);
})


// function printme(item) {
//     console.log(item);
// }

// Arrow function
const printme = (item) => {
    // console.log(item);
}
coding.forEach(printme) 


coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})