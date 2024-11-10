const user = {
  userName: "Abdullah",
  logInCount: 10,
  singedIn: true,

  getUserDetails: function() {
    // console.log("Got user details from Database");
    // console.log(`Username: ${this.userName}`);
    // console.log(this);
  }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function User(userName, logInCount, isloggedIn) {
  this.userName = userName;
  this.logInCount = logInCount;
  this.isloggedIn = isloggedIn;

  this.greeting = function(){
    console.log(`Welcomre: ${this.userName}`);
  }

  return this
}

const userOne = new User("Abdulah", 10, true);
const userTwo = new User("Adil", 5, false);
const userThree = new User("Jalib", 15, false);

console.log(userOne.constructor);

// console.log(userOne, userTwo, userThree);
