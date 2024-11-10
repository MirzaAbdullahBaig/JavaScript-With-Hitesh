// First Promise

const promiseOne = new Promise((resolve, reject) => {
  // Do any async operations
  //DB call, cryptography, network, API calls 
  setTimeout(() => {
    // console.log("Async Task Completed");
    resolve()
  }, 1000)
})

promiseOne.then(() => {
  // console.log("Promise consumed successfully");
})


// Second Promise

new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('Async Task 2 completed');
    resolve();
  }, 1000)
}).then(() => {
  // console.log('Async 2 resolved successfully')
})


// Third Promise

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      userName: "Abdullah",
      email: "abaig@gmail.com"
    });
  }, 1000);
})

promiseThree.then((user) => {
  // console.log(user);
})


// Fourth Promise

const promiseFourth = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true
    if (!error) {
      resolve({userName: "Abdullah", email: "admin@example.com", password: "3210"})
    } else {
      reject('ERROR: Somthing went wrong')
    }
  }, 1000);
})

promiseFourth.then((user) => {
  console.log(user);
  return user.userName
}).then((userName) =>{
  console.log(userName);
}).catch((err) => {
  console.log(err);
}).finally(() => console.log("The Promise is either fulfilled or rejected"))


// Fifth Promise

const fifthPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true
    if (!error) {
      resolve({userName: "Baig", email: "admin321@example.com", password: "bshd78"})
    } else {
      reject('ERROR: JS went wrong')
    }
  }, 1000);
})

async function consumePomiseFive(){
  try {
    const response = await fifthPromise
    console.log(response);
  } catch (error) {  
    console.log(error);
  }
}

consumePomiseFive()


// 

// async function getAllUser() {
//   try {
//     const response = await fetch('https://api.github.com/users/MirzaAbdullahBaig')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUser()


fetch('https://api.github.com/users/MirzaAbdullahBaig')
.then((respone) => {
  return respone.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))
