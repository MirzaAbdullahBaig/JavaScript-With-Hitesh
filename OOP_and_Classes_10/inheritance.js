class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course added by ${this.username}`);
  }
}

const teacher = new Teacher("Abdullah", "admin@gmail.com", "321");
const newTeacher = new User("Jalib")

teacher.addCourse();
newTeacher.logMe()

console.log(teacher === newTeacher);
console.log(teacher === Teacher);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);