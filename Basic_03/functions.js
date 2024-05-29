// function addTwoNumbers(num1, num2){ // Parameters
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){ // Parameters
    let result = num1 + num2

    return result
}

const result = addTwoNumbers(4, 8)

// console.log("🚀 ~ result:", result)


function loginUserMessage (userName = "Sam") {
    // if (!userName) {
    //     console.log("plz enter a user name");
    // } else {
    //     return `${userName} Just Logged in`
    // }
    return `${userName} Just Logged in`
}

console.log(loginUserMessage("Abdullah"));
console.log(loginUserMessage());

