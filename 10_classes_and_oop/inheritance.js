class User {
    constructor(username) {
        this.username = username // a class which have a property created of username
    }
    logme() {
        console.log(`Username is ${this.username}`);

    }
}

class Teacher extends User {
    constructor(username, email, password) { // i'm using constuctor here and it will override the User constructor,
        super(username) // the super keyword working here is that it will take the class which'll be get extended(user here) , so it will. go in user class and inside user clas it'll go inside constructor bts the username value get set and i can also take the value over here 
        this.email = email
        this.password = password
    }
    //teacher have a feature that he/she can add course
    addCourse() {
        console.log(`A new course was added by ${this.username}`); //i'm cheking that i've got the access of username or not?
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123") // if i don't use new then i get the error(Class constructor Teacher cannot be invoked without 'new')

chai.logme()
chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logme()
//masalaChai.addCourse() // why does masala chai dosen't have functionality of logme

console.log(chai instanceof User);
console.log(chai instanceof Teacher);
