const name = "priyanshu"
const repcount = 50

console.log(name + repcount);
console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repcount}`); //we can also add method here as we added toupper

const gamename = new String("hitesh-hc")

console.log(gamename[0]); //for accessing the 0th key
console.log(gamename.__proto__); 

console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));

const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice(-8,4) //we can use negative value in slice

console.log(anotherstring);

const newstringone = "     hitesh       "

console.log(newstringone);
console.log(newstringone.trim()); //it will remove the spaces

const url = "https://hitesh.com.hitesh%20choudhary"
console.log(url.replace('%20' , '-')); //replace : learn the methods learn about split and include method

