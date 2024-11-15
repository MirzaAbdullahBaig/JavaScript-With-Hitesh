// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}321`
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`
//   }
// }

// const chai = new User("Abdullah", "admin@admin.com", "pakistan");

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


// Behind The Scene of class & constructor

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function() {
  return `${this.password}321`
}
User.prototype.changeUserName = function() {
  return `${this.username.toUpperCase()}`
}

const tea = new User("Abdullah", "admin@admin.com", "pakistan");

console.log(tea.encryptPassword());
console.log(tea.changeUserName());