//array
const myarr = [2,3,4,5,6]
const myheros = ["dad" , "grandfather","rounak bhaiya"]

const myarr2 = new Array(1,2,3,4,5)
//console.log(myheros[1]);

//Array Methods

myarr.push(7); //new element add to the array
myarr.push(9);

myarr.pop() //rmove the last element from the array

myarr.shift(); //remove the element from the starting
//console.log(myarr); 

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(4));

const newarr = myarr.join() //join will convert the array into string (go through this topic)

// console.log(myarr);
// console.log(typeof newarr);
 

//slice ,splice

console.log("A ", myarr);

const myn1 = myarr.slice(1, 3)

console.log(myn1); 
console.log("B ", myarr); //after using splice


const myn2 = myarr.splice(1, 3)

console.log("C ", myarr); // after using splice
console.log(myn2); //from array the slice o/p get removed splice o/p :[4,5,6] after splice o/p : [3,7]
