// Execution Context and Call Stack in Javascript
// Excalidraw Link => https://excalidraw.com/#json=d8DAUY77BZf-QWip0jo0w,8XSYFuWvCPaAvFras_r5MQ

// Executional Context Example Code

let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1 + val2)
let result2 = addNum(10 + 2)


// Call Stack Example Code


// Simple Example

function one() {
    console.log("one");
}

function two() {
    console.log("two");
}

function three() {
    console.log("three");
}

// one();
// two();
// three();


// Last In First Out (LIFO) Example

function one() {
    console.log("one");
    two();
    console.log("one is end");
}

function two() {
    console.log("two");
    three();
    console.log("two is end");
}

function three() {
    console.log("three");
}

// one();
// two();
// three();