// Singleton object 

// const tinderUser = new Object() // Singleton object

const tinderUser = {} // Non Singleton object

tinderUser.name = "Abdullah"
tinderUser.age = 20
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const student = {
    email: "abaina@gmail.com",
    fullname: {
        userFullName: {
            fristName: "Abdullah",
            lastname: "Baig"
        }
    }
}

// console.log(student.fullname.userFullName.fristName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2) // Recomended syntax
const obj3 = {...obj1, ...obj2}

// console.log("🚀 ~ obj3:", obj3)


const user = [
    {
        id: 1,
        email: "email@example.com"
    },
    {
        id: 2,
        email: "example@email.com"
    },
    {
        id: 3,
        email: "example@gmail.com"
    },
]

console.log(user[1].email);

console.log(Object.keys(tinderUser)); // most important syntax agy project ma bht use ho ga
console.log(Object.values(tinderUser)); // most important syntax agy project ma bht use ho ga
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name')); // check value avalable or not
