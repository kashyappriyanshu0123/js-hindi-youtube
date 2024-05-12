const marvel = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman","batman","flash"] // it's the 4th element if we are pushing it in marvel array

marvel.push(dc_heros);
console.log(marvel);

// const allheros = marvel.concat(dc_heros)
// console.log(allheros);




const all_new_heros = [...marvel, ...dc_heros] //spread 

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray('hitesh'));
console.log(Array.from("hitess")); // it will covert it into array bcoz of from
console.log(Array.from({name:"hitesh"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));