//array
const myarr = [2,3,4,5,6]
const myheros = ["dad" , "grandfather","rounak bhaiya"]

const myarr2 = new Array(1,2,3,4,5,"kashyap")
//console.log(myheros[1]);
// console.log(myheros[2]);
 
// for (let index = 0; index < myarr2.length; index++) {
//     const element = myarr2[index];                              //+++++++My practise
//     console.log(element);
    
// }

//Array Methods


// myarr.push(7); //new element add to the array
// myarr.push(9);
// myarr.push("main hoon don")
// console.log(myarr);

// myarr.pop() //remove the last element from the array
// console.log(myarr);

// myarr.unshift(8) //insert the element to the begining
// console.log(myarr); 

// myarr.shift(); //remove the element from the starting
// console.log(myarr);

// myarr.shift()
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(4));

const newarr = myarr.join() //join will convert the array into string (go through this topic)

console.log(myarr);
console.log(newarr);
console.log(typeof newarr);
 

//slice ,splice

 console.log("A ", myarr);

const myn1 = myarr.slice(0, 3)

console.log(myn1);  //the values after using slice method
console.log(`B original ${myarr} it got changed`);     //the original array : B  [ 2, 3, 4, 5, 6 ]


const myn2 = myarr.splice(1, 3)

console.log("C ", myarr); // the original array gets manipulated after using splice o/p : C  [ 2, 6 ]
console.log(myn2); //from array the splice o/p get removed splice o/p :[3,4,5] after splice o/p : [2,6]
