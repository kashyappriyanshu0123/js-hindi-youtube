// class is defined in ES6 before that there was no concept of class before(is that true?)

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password

//     } // whenever an object is initalized by an class it means when the new keyword is getting used then the constructor function called automatically 

//     encryptpassword() { // this is a func but i can also called it as method
//         return `${this.password} abc`
//     }

//     changeusername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai", "chai@gmail.com", "123") // when i didn't define any parameter and try to see the output on console it'll show(undefined)

// console.log(chai.encryptpassword());
// console.log(chai.changeusername());

//behind the scenes if i didn't use the class syntax(under the hood mechanism)

function User(username, email, password) { // this is a function but it also behave like object so i can inject (.prototype over there) bcoz of prototypal inheritance or prototyapal behavior
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function () { // if i want to add on some property on this function then we will use this syntax
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());