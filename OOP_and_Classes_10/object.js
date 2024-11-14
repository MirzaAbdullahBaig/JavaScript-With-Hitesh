function multiplyByFive(num) {
  return num*5
}

multiplyByFive.power = 2

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);


function createUser(userName, score) {
  this.userName = userName;
  this.score = score;
}


createUser.prototype.increment = function() {
  this.score++;
}
createUser.prototype.printMe = function() {
  console.log(`Score is ${this.score}`);
}

const Pakistan = new createUser("Pakistan", 220)
const India = new createUser("India", 120)


Pakistan.printMe( )