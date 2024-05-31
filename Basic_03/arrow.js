const user = {
    username: "Abdullah",
    price: 2999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
        // console.log("This" , this);
    }
}
// user.welcomeMessage()
// user.username = "Adil"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let username = "Ali"
//     console.log(this.username);
// }
// chai()


// const chai = function () {
//     let username = "Ali"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Ali"
    console.log(this);
}

// chai()



// Arrow Function

// const addtwo = (num1, num2) => {  // Basic Arrow Function Structure // {} ma return keyword likhna pary ga
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2  // Another Structure of Arrow Function
// const addtwo = (num1, num2) => (num1 + num2)  // Another Structure of Arrow Function


const addtwo = (num1, num2) => ({username: "Abdullah"}) // Another Structure of Arrow Function

// console.log(addtwo(3, 4));


/*
Just information

const myarray = [2, 5, 3, 7, 6]

myarray.forEach(function() {})
myarray.forEach(() => {})
myarray.forEach(() => ())

*/