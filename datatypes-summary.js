// Primitive data types

// 7 types: : String , Number , Boolean ,null ,undefined,symbol,big int


// Q -> is js a dynamically type lang or statically type language

//in js it's not important to defined the type of the variable
const outsidetemp = null;
let usermail = undefined;

console.log(usermail);

//Symbol 

const id = Symbol("123")
const anotherid = Symbol("123") //  the both values are passed here is same string , nut the result will be different for both of them

console.log(id==anotherid);

//bigint
const bignumber = 234567890123n
console.log(typeof bignumber);

//console.log(typeof outsidetemp); // output object

//referencen(non - prmitive datatypes)

//Array , object , functions -> these non-primitive data type return type are object
const myfunction = function()
{
    console.log("helloworld");
}
console.log(typeof myfunction); // output function but in actually it calls as obj function

console.log(typeof outsidetemp);  // o/p : object

const heroes = ["shaktiman","krrish","flying jat" ];

console.log(typeof heroes);// output object

let myobj = {
    name : "priyanshu",
    age : 24,
}

const age = null

console.log(typeof age);
