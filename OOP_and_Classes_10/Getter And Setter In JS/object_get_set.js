const User = {
  _email: "chai@chai.com",
  _password: "chai",

  get email() {
    return this._email.toLocaleUpperCase()
  },

  set email(value) {
    this._email = value;
  }
}

const Tea = Object.create(User)

console.log(Tea.email);