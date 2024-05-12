
//object literals

//symbol

const mySym = Symbol("key1") // declaring symbol

const jsuser = {  //jsuser is a object
    name : "priyanshu",
    "full name" : "priyanshu kashyap" ,// there is no way i can access it through (.) i have to access through brackets only
    [mySym]: "mykey1", //we have to put the key in bracket for refering the Symbol -> if it's not in bracket then its string
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
console.log(typeof jsuser.mySym);
console.log(jsuser[mySym]);

jsuser.email = "priyanshuchatgpt@.com"
 //Object.freeze(jsuser)
jsuser.email = "priyanshumicrosft@.com"
console.log(jsuser);

jsuser.greeting = function(){ //greeting is a method
    console.log("hello js world");
}
console.log(jsuser.greeting());
jsuser.greetingtwo = function(){ //greeting is a method
    console.log(`hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
