function setusername(username){
    //complex db calls
    this.username = username
    console.log("called");
}

function createuser(username,email,password)
{
    setusername.call(this,username) // this func will set the value of username
    //for holdig the reference there is a method call
    this.email = email
    this.password = password
}
const chai = new createuser("kashyap" , "chai@fb.com", "123")
console.log(chai);