

// const user = {
//     username : "priyanshu",
//     email : "priyanshukashyap024GMAIL.COM",
//     logincount : 5,

//     getuserdetails : function(){
//         console.log(`Username : ${this.username}`);
//         console.log(this);
//     }

// }
// console.log(user.username);
// console.log(user["logincount"]);
// console.log(user.getuserdetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

// const userOne =  User("hitesh", 12, true)
// const userTwo =  User("ChaiAurCode", 11, false) // this will rewrite the value of userone even the functon two is not 


const user1 = new User("kashyap",5,true)
user1.greeting()

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) 

// console.log(userOne);
// console.log(userTwo);
// console.log(userOne.constructor); // constructor property is reference about itself (o/p : [Function: User])
//console.log(userTwo);