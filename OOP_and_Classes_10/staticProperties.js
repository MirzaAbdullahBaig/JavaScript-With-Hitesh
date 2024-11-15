class User {
  constructor(username){
    this.username = username;
  }

  logMe() {
    console.log(`UserName: ${this.username}`);
  }

  static createID() {
    return `123`
  }
}

const abdullah = new User("Abdullah")
// console.log(abdullah.createID());


class Teacher extends User {
  constructor(username, email){
    super(username)
    this.email = email
  }
}

const mobile = new Teacher("Oppo", "oppo@gmail.com")

// mobile.logMe()
// console.log(mobile.createID());
