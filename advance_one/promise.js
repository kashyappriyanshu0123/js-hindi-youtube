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
//     console.log("Promise consumed");
// })

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
// .then(function(){ //.then direct connection wth resolve
//     console.log("async 2 resolved");
// })

// const promisethree = new Promise(function(resolve,reject){
// setTimeout(function(){
//   resolve({username : "Priyanshu kumar" , email : "kashyap@123.com" })
//   },1000)
// })



// promisethree.then(function(user){
//     console.log(user);
// })


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
})