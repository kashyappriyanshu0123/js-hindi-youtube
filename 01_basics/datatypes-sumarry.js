// Primitive data types

// 7 types: : String , Number , Boolean ,null ,undefined,symbol,big int


// Q -> is js a dynamically type lang or statically type language

//in js it's not important to defined the type of the variable
const outsidetemp = null;
let usermail = undefined;

//console.log(usermail);

//Symbol 

const id = Symbol("123")
const anotherid = Symbol("123") //  the both values are passed here is same string , not the result will be different for both of them

// console.log(id==anotherid);

//Bigint

const bignumber = 234567890123n
//console.log(typeof bignumber); //bigint



//reference(non - prmitive datatypes)

//Array , object , functions -> these non-primitive data type return type are object
const myfunction = function()
{
    console.log("helloworld");
}
console.log(typeof myfunction); // output :function but in actually it calls as obj function

const heros = ["shaktiman","krrish","flying jat" ];

console.log(typeof heros);// output: object


//My practise

function jaipur() {
    console.log('hello wolrd');
    
}
console.log(jaipur());






//+++++++++++++++++++++

//stack used in primitive datatypes and heap memory used in non-primitive datatypes

let myyoutubename = "hiteschoudhary.com" //it will go to stack

let anothername = myyoutubename
anothername = "chaiaurcode"

console.log(myyoutubename); //hiteschoudhary.com
console.log(anothername);   //chaiaurcode

let userone = {
    email: "priyanshukashyap024@gmail.com", // object will be allocated in heap
    upi : "user@ybl",
    password:123
    
}


console.log(userone);
let usertwo = userone

usertwo.email = "hitesh@gmail.com"

console.log(userone.email);
console.log(usertwo.email);