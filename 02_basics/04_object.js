//objects singleton or how can i declare object with the help of constructor

//creating object 2 type
const tinderuser = {} //non - singleton object
const tinder = new Object() //singleton object

tinderuser.id = "123abc" 
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

tinder.name = "kashyap"
tinder.rollno = 123

// console.log(tinder);
// console.log(tinderuser);

const regularuser = {
    email : "priyanshukashyap.com",
    fullnames : {
        userfullname : {
            firstname : "priyanshu",
            lastname : "kashyap"
        }
    }
}

// console.log(regularuser.fullnames.userfullname.firstname); //for accessing objects in objects

//for combining the objects
const obj1 = {
  1 : "a",
  2 : "b"
   }
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj4 = {
    5: "b",
    7 : "d"
}

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);                      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

// const obj3 = {obj1 , obj2}
// console.log(obj3);              //   { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } ->the object is binded inside the object

// const obj3 = Object.assign(obj1,obj4)
// console.log(obj3);

//const obj3 ={...obj1, ...obj2} //spread operator
//console.log(obj3);

const users = [ //the value comes from databse
  {
    id :1,
    email : 'ppeoei@gmail.com'
  },
  {
    id :1,
    email : 'pkas.com'
  },
  {
    id :1,
    email : 'ppeoei@gmail.com'
  }
]
console.log(users[1].email);  // =>  [] we are using brackets because we binded the object in the array 
console.log(users[2].id);

//console.log(tinderuser);
//  console.log(Object.keys(tinderuser));
//  console.log(Object.values(tinderuser));
//  console.log(Object.entries(tinderuser));

 console.log(tinderuser.hasOwnProperty('isloggedin'));


 //+++++++ objects destructuring and json api

 const course = {
  coursename : "js in hindi",
  price : "999",
  courseinst: "priyanshu"
 }
 
 //console.log(course.courseinst);

 //const {courseinst}   = course

 //console.log(courseinst);
 const {courseinst : inst}   = course

 console.log(inst);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",  //json format api
//     "price": "free"
// }

[
  {},
  {},
  {}
]