const friendList_01 = ["Abdullah", "Adil", "Jalib", "Hamza", "Ahad"]

const friendList_02 = ["Kashan", "Makki", "Ahmed", "Eman", "Haider"]

// friendList_01.push(friendList_02)
// console.log(friendList_01)

// const allFriendList = friendList_01.concat(friendList_02)
// console.log("🚀 ~ allFriendList:", allFriendList)

// const friendList = [...friendList_01, ...friendList_02]
// console.log("🚀 ~ friendList:", friendList)


// const num = [1, 2, 3, [4, 17, 16, 7, [12, 13, 13, 14, 15], [8, 9, 19, 11], 6, 5]];
// const new_num = [...new Set(num.flat(Infinity))]
// new_num.sort((a, b) => a - b);
// console.log("🚀 ~ new_num:", new_num)

// console.log("🚀 ~ new_num:", new_num[9]);



console.log(Array.isArray("Abdullah"));
console.log(Array.from("Abdullah"));
console.log(Array.from({name: "Adil"})); // Intresting || Interview Question


const score1 = 1000;
const score2 = 2000;
const score3 = 3000;

console.log(Array.of(score1, score2, score3));