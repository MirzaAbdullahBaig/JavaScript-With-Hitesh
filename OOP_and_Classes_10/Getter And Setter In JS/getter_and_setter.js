class User {
  constructor(email, password) {
    this.email = email;
    this.password = password
  }

  get email() {
    return this._email.toUpperCase()
  }

  set email(value) {
    this._email = value
  }

  get password(){
    // return `${this._password}@gmail.wow`
    return this._password.toUpperCase();
  }

  set password(value){
    this._password = value
  }
}


const abdulah = new User("abdulah@example.com", "usama");
console.log(abdulah.email);
console.log(abdulah.password);
