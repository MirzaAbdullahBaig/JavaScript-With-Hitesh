function SetUserName(username) {
  // complex DB calls
  this.username = username; // this reference
  console.log("called");
}

function createUser(username, email, password) {
  SetUserName.call(this, username) // .call || .this upper function refernce

  this.email = email;
  this.password = password;
}

const User = new createUser("Abdullah", "admin@gmail.com", "admin123")
console.log("🚀 ~ User:", User)
