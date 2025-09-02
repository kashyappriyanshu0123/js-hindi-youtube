








class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123` // createtid work is that it'll return back an unique id for every new user  , when i save an user in db then mongodb will automatically attach an unique id 
    }
}

const hitesh = new User("hitesh")
//console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(Teacher.createId());
iphone.logMe()