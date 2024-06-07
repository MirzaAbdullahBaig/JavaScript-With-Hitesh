// reduce() method in javascript


const myNums = [1, 2, 3, 4]

// reduce() in function() keyword
// const totalNum = myNums.reduce(function (acc, crrval) {
//     console.log(`acc is: ${acc} and crrval is: ${crrval}`);
//     return acc + crrval
// }, 0)


// reduce() in Arrow function()
// const totalNum = myNums.reduce((acc, crrval) => {
//     console.log(`acc is: ${acc} and crrval is: ${crrval}`);
//     return acc + crrval
// }, 0)


// reduce() in Arrow function() in one line
// const totalNum = myNums.reduce( (acc, crrval) => acc + crrval, 0)

// console.log(totalNum);

const shoppingCart = [
    {
        itemName: "JavaScript Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 1999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 9999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
// console.log("🚀 ~ totalPrice:", totalPrice)
