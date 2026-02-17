// for of loop : (it's a array specific loop)


// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings1 = ["hello world!"]

// for (const val of greetings1) {
    
//     console.log(`each char is ${val}`);
    
// }

// remove the space


const greetings = ["hello world!"];
let i = 0;
for (const val of greetings) {
    for (const char of val) {
        if (char === ' ') {
            continue; // Skip this iteration if the character is a space
        }
        
        // console.log(`each char is ${val}`);
        // console.log(`each char is ${char}`);
    }
}

// const greetings = ["hello world!"];

// // Iterate over each character in the string
// for (const char of greetings[0]) {
//     // Skip the iteration if the character is a space
//     if (char === ' ') {
//         continue;
//     }
//     // Log each non-space character
//     console.log(`each char is ${char}`);
// }


//Maps -> Maps is object in itself in js everything is object

const map = new Map()
map.set('USA' , "United states of america")
map.set('IN',"INDIA")
map.set('Fr' , "France")

console.log(map);

// FOR OF LOOP +++++++++++++++++
for(const [key,value] of map)       //USA :- United states of america
                                   //  IN :- INDIA
                                    // Fr :- France
{
   // console.log(key);
    
   console.log(key,':-',value); 
}


//can i apply for of loop to object?

const myobj = {
    game1: "nfs",
    game2 : "spider-man"
}


// for (const [key,value] of myobj) {
//     console.log(key, ':-' , value);  //its not iterable on myobj it's throwing error(for of loop won't work for iterating object)
    
// }