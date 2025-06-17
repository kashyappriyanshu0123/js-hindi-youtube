// const user = {
//     username: "hitesh",
//     price: 999,         // between the scopes are all current context

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);  // we are in a node enviornment so this will refer to an empty object
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this);
//     console.log(`${this.username} , welcome to website`);     // this will work  on object , it's not working on function like here (o/p will be: undefined , welcome to website)
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//  const chai = () => {       // holding arrow func in a variable
//     console.log('priyanshu kashyap');
//     console.log(this.username );    // this also wont't work on arrow function 
//  }

//  chai()

// const addtwo = (num1,num2) => {
//     return num1+num2           // explicit return ->because we are using return here
// } 

//  console.log(addtwo(3, 4))

// const addTwo = (num1, num2) =>  num1 + num2    

// const addTwo = (num1, num2) => ( num1 + num2 )   // implicit return because we are not using return here instead of that using brackets

// const addTwo = (num1, num2) => ({username: "hitesh"})  // we have to wrap it up in paranthese to return the object otherwise it will give undefined
// console.log(addTwo(3,4));







//+++++My practise 






// const addthree = (num1,num2,num3) => {
//     return num1+num2+num3
// }

// console.log(addthree(1123,34,56))


const ch = {
  username : "kashyap",
  price : 1000,

  welcomemessage : function(){
       console.log(`${this.username},welcome to website`);
       console.log(this); // this will giving me the brief about current context like here it will refer to all the values inside ch
       
  }
}
ch.welcomemessage()
ch.username = "hero" // here the current context got changed
ch.welcomemessage()   // this tells about current context or current variables
console.log(this);   // {} => i'm on node enviornment rn that's why it will give me empty parantheses

const addfour = (num1,num2,num3,num4) => {
  return num1+num2+num3+num4
}
console.log(addfour(2222,44445,4444,521))