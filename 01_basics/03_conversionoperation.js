let score = "33ab" //variable name score assigning value 33
let a = null;

//console.log(typeof score); //both are same

//console.log(typeof(score)); //this score is a method

let valueInNumber = Number(score) //now it's guaranteed thats score is converted into number
console.log(typeof(valueInNumber));

//console.log(valueInNumber);

//console.log(a);

//33 => 33
//"33abc" => Nan
//true => 1; false => 0

let isloggeddin = 0

let booleanisloggedin = Boolean(isloggeddin)

console.log(booleanisloggedin); 
//"" => false //empty string is false
//"hitesh" => true 

let some = 33

let stringnum = String(some) // 33 is a string it's converted

console.log(stringnum);





// ******************* OPERATIONS *****************

let value = 3
let negval = -value //the value will be negative
console.log(negval);

let str1 = "priyanshu"
let str2 = "kashyap"

let str3 = str1 + str2
console.log(str3);

console.log("first string is :" +str1 ,"second strig is:" ,str2);
// console.log(2/3); // 0.6666666666666666

// console.log("priyanshu" + "kashyap");
console.log(1 + "2"); //12
 //console.log("1"+2+2); //122
// console.log(1+2+"2");  //32 becuse it's a guideline (for reference see in ecma )

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion