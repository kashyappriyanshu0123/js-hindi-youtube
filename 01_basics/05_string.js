const name = "PrIyanshu"
const repcount = 50

console.log(name + repcount);
console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repcount}`); //we can also add method here as we added toupper

console.log(`hey my name is ${name.toLowerCase()} and my reocount is : ${repcount}`);
const gamename = new String("hitesh-hc") 

console.log(typeof gamename);
console.log(gamename[0]); //for accessing the 0th key
console.log(gamename.__proto__); // => {}

console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));

const str = "kashyap"
console.log(str.charAt(2));

const newstring = gamename.substring(0,4)
console.log(newstring);

const anotherstring = gamename.slice(-8,7) //we can use negative value in slice

console.log(anotherstring);

const newstringone = "     hitesh       "

console.log(newstringone);

console.log(newstringone.trim()); //it will remove the spaces

console.log(newstringone);
const url = "https://hitesh.com.hitesh%20choudhary"
console.log(url.replace('%20' , '-')); //replace : learn the methods learn about split and include method

console.log(url.includes('hitesh'));
console.log(gamename.split('-'));   //   The split() method splits a string into an array of substrings.


//+++++My practise

// console.log(url.replace("hitesh.com" , "kashyap.com"));

// const onestring = "kashyap"

// console.log(onestring);

// console.log(`my surname is ${onestring.toLocaleUpperCase()} and i want the whole world `);

// console.log(onestring.charAt(2));

// console.log(onestring.indexOf('k'));

// console.log(`my surname is  kashyap and i am learning from ${gamename}`);





//++++++++++++++   NEW Practise session

const string = new String('chiku-ch')

console.log(string[0]);
console.log(string.length);
console.log(string.toUpperCase());


console.log(string);
console.log(string.charAt(2));

const fr = string.substring(0,4) // 4th character will not get included
console.log(fr);

const fr1 = string.slice(-6,4)
console.log(fr1);

const fr2 = "    kashyap     "

console.log(fr2);
console.log(fr2.trimStart());

const naming = "fateh bahadur singh"


console.log(`he was my hero ${naming.toUpperCase()} `);
