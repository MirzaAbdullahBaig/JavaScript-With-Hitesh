const ValuePI = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log("🚀 ~ ValuePI:", ValuePI)

const user = {
  name: "Ahmed",
  age: 30,
  isAvailable: true,

  callUser: function() {
    console.log("User Is Not Available");
  }
}
console.log(Object.getOwnPropertyDescriptor(user, "name"));


Object.defineProperty(user, "name", {
  // writable: false,
  enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(user, "name"));


for (const [key, value] of Object.entries(user)) {
  if (typeof value !== "function"){
    console.log(`${key} : ${value}`);
    
  }
}