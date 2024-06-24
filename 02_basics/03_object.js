
//object literals

//symbol

const mySym = Symbol("key1") // declaring symbol

const jsuser = {  //jsuser is a object
    name : "priyanshu",
    "full name" : "priyanshu kashyap" ,    // there is no way i can access it through (.) i have to access through brackets only if the key is in string format
    [mySym]: "mykey1",                     //we have to put the key in bracket for refering that we are using key as a Symbol -> if it's not in bracket then its string in the output
    age : 20,
    location : "patna",
    email : "priyanshukashyap024@gmail.com",
    isloggedin : "false",
    lastlogindays : ["Monday" , "Tuesday"],
    myth : function(){
        console.log(`everything is all about ${this.age}` );

    }

}
console.log(jsuser.myth);
console.log(jsuser);
console.log(jsuser.email);
console.log(jsuser["email"]); //we have to pass the email as a string because bts it's placed like a string 
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);
console.log(jsuser.isloggedin);
console.log(jsuser.location);

// jsuser.email = "priyanshuchatgpt@.com"  //changing the values
//  //Object.freeze(jsuser) // Any changes won't effect the jsuser object now because it's freezed right now
// jsuser.email = "priyanshumicrosft@.com"
// console.log(jsuser);

// jsuser.greeting = function(){ //greeting is a method
//     console.log("hello js world");
// }
// console.log(jsuser.greeting());
// jsuser.greetingtwo = function(){ //greeting is a method
//     console.log(`hello js user, ${this.name}`);
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());


//+++++ My practise ++++

jsuser.namaste = function(){
console.log("hello world");
}

console.log(jsuser.namaste());

jsuser.namastetwo = function(){
    console.log(`my location is ${this.location}`);
}
console.log(jsuser.namastetwo());