const user = {
    username : "priyanshu",
    logincount : 8,
    signedin : true,

    getuserdetails : function(){ //getuserdetails is a function
      //  console.log("got user details from database");
    //   console.log(`username: ${this.username}`); //for accessing usernamee we have to use this keyword
    //   console.log(this);
    }

}
// console.log(user);
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
// const userTwo =  User("ChaiAurCode", 11, false) // this will rewrite the value of userone even the functon two is not called


const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) 

console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor); // constructor property is reference about itself (o/p : [Function: User])
//console.log(userTwo);