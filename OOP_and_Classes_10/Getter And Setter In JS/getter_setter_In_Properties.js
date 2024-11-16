function User(email, password) {

  Object.defineProperty(this, 'email', {
    get: function() {
      return this._email.toUpperCase()
    },
    set: function(value) {
      this._email = value
    }
  })
  Object.defineProperty(this, 'password', {
    get: function() {
      return this._password.toUpperCase();
    },
    set: function(value) {
      this._password = value;
    }
  })

  this.email = email;
  this.password = password;
}

const abdulah = new User("abdulah@example.com", "usama");
console.log(abdulah.email);
console.log(abdulah.password);