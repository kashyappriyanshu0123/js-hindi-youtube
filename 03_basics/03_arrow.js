// const user = {
//     username: "hitesh",
//     price: 999,         // between the scopes are all current context

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     //console.log(this);
//     console.log(`${this.username} , welcome to website`);     // this only working on object , it's not working on function like here
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//  const chai = () => {
//     console.log('priyanshu kashyap');
//     console.log(this.username );    // this also wont't work on arrow function 
//  }

//  chai()

const addtwo = (num1,num2) => {
    return num1+num2           // explicit return ->because we are using return here
} 

 console.log(addtwo(3, 4))

// const addTwo = (num1, num2) =>  num1 + num2    

// const addTwo = (num1, num2) => ( num1 + num2 )   // implicit return because we are not using return here instead of that using brackets

// const addTwo = (num1, num2) => ({username: "hitesh"})





// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
 

///+++++My practise 



// const username = {
//     name : "priyanshu",
//     price : 1000000000000000000000000000,

//     welcomemessage : function(){
//       console.log(`${this.name} , welcome to the website`);
//       console.log(this);
//     }
// }

// username.welcomemessage()
// // username.name = "kashyap"
// // username.welcomemessage()
// console.log(this);       // {} => i'm on node wnviornment rn that's why it will give me empty parantheses