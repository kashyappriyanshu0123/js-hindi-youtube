const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);

console.log(balance.toString());  //-> 1000
console.log(typeof balance);      //object
console.log(balance.toFixed(4));
console.log(balance.toString().length);

const othernumber = 123.8966
//console.log(othernumber.toPrecision(4));


let text = new String("Hello World!");
let result = text.toString();
console.log(typeof result);

// let se = new String("kashyap");
// console.log(se);
// let res = se.toString();
// console.log(typeof res);




// const a = "abc"
// console.log(typeof a);

// const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'));


//+++++++++++++ Maths +++++++++++++++++++

//maths library comes with js by default

// console.log(Math); //Math library is a object comes with alot of properties
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.92));
// console.log(Math.max(4,5,1,8,3));
// console.log(Math.min(4,5,13,6,7));



console.log(Math.random()); //the value lies b/w 0 to 1

console.log((Math.random()*10) + 1);  //By multyplying by there is a chance it will gave me result in 0.1 or in 0.2 and after doing floor it will become 0 That's why we are adding it by 1 to go above the range from 1
console.log(Math.floor(Math.random()*10) + 1);
//in the case of min and max case define
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //(max-min) : because i wanted range b/w these and +1 for avoiding the 0 case . Adding minimum bcoz it will give the same value that's up there that's why we add min to lie b/w min to max range