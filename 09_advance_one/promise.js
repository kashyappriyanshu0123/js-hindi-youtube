// //  Promise creation
// const promiseOne = new Promise(function(myresolve, myreject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         myresolve()//for connecting myresolve and (.then) we have to call resolve method 
//         console.log('Async task is compelete'); //it will execute first

//     }, 1000)
// })

// //"Consuming code"
// promiseOne.then(function(){ //(.then direct connection with myresolve)
//     console.log("Promise consumed");  //with .then i get a function with it and this function automatically receives an argumnet and the argument work is to return the value which we get by settimeout 
// })

//2nd method to create promise

// new Promise( (resolve,reject) =>
// {
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 1000);
//     // setTimeout(function(){
//     //     console.log("async task 2");
//     //     resolve()
//     // })
// })

// //bcoz we didn't store the func in var so i can directly call .then

// .then(function(){ //.then direct connection wth resolve
//     console.log("async 2 resolved");
// })

// const promisethree = new Promise(function(resolve,reject){
// setTimeout(function(){
//   resolve({username : "Priyanshu kumar" , email : "kashyap@123.com" })  //the values which are passing in the .then callback function is because of resolve , so in connclusion i get that whatever i passed in the parameter of resolve we get the value in .then
//   },1000)
// })

// promisethree.then(function(user){  //     the resolve is connected with .then i can expect that by defult some data will get passed in the function let's suppose i'm calling that whole object as a user
//     console.log(user);
//})



const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true // when i make this false it will show error
    if (!error) {
      resolve({ username: "priyanshu", password: "123" })
    } else {
      reject('ERROR: Something went wrong')
    }
  }, 1000)
})

promiseFour
  .then((user) => {
    console.log(user);
    return user.username
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is either resolved or rejected"); //it will get printed if the prmise is resolve or rejected
  })

// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//        let error = true
//        if(!error){
//         resolve({username: "javascript" , password : "123"})
//        }
//        else{
//         reject("errror : js went wrong")
//        }
//     },1000)
// })

// async function consumefive(){
// try {
//     const response = await promisefive
//     console.log(response);

// } catch (error) {
//     console.log(error);
// }
// } 
// consumefive()

//both are same async await and .then , (.catch)

async function getallusers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
getallusers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data); //response.json return will handle by this (.then)
// })
// .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


