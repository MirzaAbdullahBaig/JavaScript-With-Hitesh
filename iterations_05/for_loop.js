// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value, i: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value, j: ${j}`);
    }
}



let myArr = ["Abdullah", "Ali", "Ahad", "Adil"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log("🚀 ~ element:", element)
}



// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log("Detected 5");
        break;
    }
    // console.log(`Value of index is: ${index}`);
}


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of index is: ${index}`);
}