let score = "33ab" //variable name score assigning value 33
let a = null;

console.log(typeof score); //both are same
console.log(typeof(score)); //this score is a method

let valueInNumber = Number(score) //now it's guaranteed thats score is converted into number
console.log(typeof(valueInNumber));
console.log(valueInNumber);

console.log(a);

//33 => 33
//"33abc" => Nan
//true => 1; false => 0

let isloggeddin = 1

let booleanisloggedin = Boolean(isloggeddin)

console.log(booleanisloggedin);
//"" => false //empty string is false
//"hitesh" => true 

let some = 33

let stringnum = String(some) // 33 is a string it's converted

console.log(stringnum);
