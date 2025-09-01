  
   
function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //  the reference of username passed here the function is getting called but when the memory is getting deleted for the function the variable are also get removed from memory so for holding the reference we have call (i want to know this line in detail)?
   // so for holding the refernce like the variables which are declared or the func calls and the values are getting returned i also want that if the execution context got removed i wan
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);