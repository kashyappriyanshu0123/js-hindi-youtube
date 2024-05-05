class user{
constructor(email,password){
    this.email = email
    this.password = password
  }
  get email(){
     return this._email.toUpperCase();
  }
  set email(value){ //i have to argument for value to set it
       this._email = value //value will be transffered here
  }
  get password(){ //method name should be same as it is in the class
  // return this._password.toUpperCase() //value will be accessed in uppercase
  return `${this._password}hitesh` //i can manipulate the password too by sending it like this (password is hitesh here)
  }
  set password(value){
    this._password = value //value i am giving is (abc) but it's manipulated
  }
}

const hitesh = new user("hitesh@ai.com","abc") //new keyword is creating the object and calling the constructor underhood
console.log(hitesh.password);