//objects singleton

//creating object 2 type
const tinder = {} //non - singleton object
const tinderuser = new Object() //singleton object

tinder.id = "123abc"
tinder.name = "Sammy"
tinder.isLoggedIn = false

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
console.log(regularuser.fullnames.userfullname.firstname); //for accessing objects in objects

//for combining the objects
const obj1 = {1: "a",
2: "b"
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
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//const obj3 = Object.assign({},obj1,obj2,obj4)
//console.log(obj3);

//const obj3 = {obj1 , obj2}
//console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } ->the object is binded inside the object


const obj3 ={...obj1, ...obj2} //spread operator
console.log(obj3);