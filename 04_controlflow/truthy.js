const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0" -> it's truthy bcoz it's in string , 'false' -> it's truthy bcoz it's in string , " " -> its truthy bcoz b/w empty string there is space in between , [], {}, function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyobj = {}


if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing operator (??) :null undefined

let val1
//val1 = 5 ?? 10 //5

//val1 = 40 ?? 10 // 40 
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20  // 10
console.log(val1);




//Terniary operator

//condition ? true : false

const iceteaprice = 100

iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");;  // more than 80
