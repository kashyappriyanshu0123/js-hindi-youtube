const descriptor = Object.getOwnPropertyDescriptor(Math,"PI") //PI name of the property

// console.log(Math.PI);
// Math.PI = 7
// console.log(Math.PI);


//console.log(descriptor);

const chai = {
    name : "priyanshu kashyap",
    price : "buhat jayda",
    isavailable : true
}

//console.log(Object.getOwnPropertyDescriptor(chai));  // it will guve me undefined beacuse i have to take property too

console.log(Object.getOwnPropertyDescriptor(chai , "name"));  

//i can also maipulate the properties of object

// Object.defineProperty(chai, 'name',{
//     writable : false,
//     enumerable : false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}