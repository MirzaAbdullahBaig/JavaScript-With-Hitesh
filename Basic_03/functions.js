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

// console.log(loginUserMessage("Abdullah"));
// console.log(loginUserMessage());




function calculatePrice (...num1) { // rest operator
    return num1
}

// console.log(calculatePrice(100, 200, 300));



const user = {
    userName: "Abdullah",
    price: 299
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({userName: "Sufyan", price: 2999})



const array = [100, 200, 300, 400]

function handleArray(anyarray) {
    console.log(anyarray[1]);
}
// handleArray(array)
// handleArray([300, 500, 700, 900])