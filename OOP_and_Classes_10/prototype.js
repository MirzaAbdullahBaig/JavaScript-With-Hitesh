// let myName = "Abdullah   "
// let friendName = "Adil   "

// console.log(myName.trueLength);

let myFriend = ["Adil", "Jalib", "Bilal", "Ahad", "Ahmed"]

let friendNum = {
  adil: "0314",
  jalib: "0343",

  getAdilNum: function () {
    console.log(`Adil num: ${this.adil}`);
  }
}

Object.prototype.abdullah = function () {
  console.log("Abdullah is present");
}

Array.prototype.heyAbdullah = function () {
  console.log("HeyAbdullah is present");
}


// friendNum.abdullah()
// myFriend.abdullah()
// myFriend.heyAbdullah()
// myNum.heyAbdullah()  // Not Accessing child properties


// inheritance 

// Old Syntax

const user = {
  name: "Abdullah",
  email: "chdsdj21e@gmail.com",
}

const teacher = {
  makeVideo: true
}

const teachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: 'e-commerce project',
  fullTime: true,
  __proto__: teachingSupport
}

teacher.__proto__ = user


// Modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "UsmanAltaf     "

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"Abdullah    ".trueLength()
"Jalib    ".trueLength()