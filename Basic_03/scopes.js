if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(c);
// console.log(b);
// console.log(a);



if (true) {
    var x = 3;
    // console.log("🚀 ~ x:", x)
}
if (true) {
    let y = 3;
    // console.log("🚀 ~ y:", y)
}
if (true) {
    const z = 3;
    // console.log("🚀 ~ z:", z)
}

// console.log(x)
// console.log(y)
// console.log(z)


function one() {
    const username = "Abdullah"

    function two() {
        const website = "youtube"
        console.log(username)    
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "Adil"
    if(username === "Adil") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// Interesting Concept

console.log(addone(5));
function addone(num) {
    return num + 1
}
console.log(addone(5));


// Hoisting Concept || Function Variable ma assign hy

// console.log(addtwo(5)); Hoisting Concept || Function Variable
const addtwo = function addone(num) {
    return num + 2
}
console.log(addtwo(5));