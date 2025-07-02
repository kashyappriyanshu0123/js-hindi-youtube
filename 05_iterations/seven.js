

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//const newnums = mynums.map( (num) => num + 10)
const newnums2 = mynums.map((num) => {
    return num + 20
})
console.log(newnums2);

// const newnums = mynums
//     .map((num) => num * 10)
//     .map((num) => num + 15)
//     .filter((num) => num > 20)
// console.log(newnums);


const newnums3 = mynums
    .map((val) => val + 1)
    .map((val) => val * 20 - 10)
    .filter((val) => val >= 20)
console.log(newnums3);
