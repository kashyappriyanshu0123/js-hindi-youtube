//reduce method

const mynums = [1, 2, 3]

// const mytotal = mynums.reduce( function (acc , currval) {
//    console.log(`acc : ${acc} and currval ${currval}`);     //it's for better readability
//   return acc + currval

// } ,0) //initial val = 0

const total = mynums.reduce(function(acc,currval)
{
    console.log(`acc : ${acc} and currvalue : ${currval}`);
    
    return acc+currval
},10)
console.log(total);

//both are same


//const mytotal = mynums.reduce((acc, curr) => acc + curr, 0) //initial value 0

//console.log(mytotal);





const shoppingcart = [
    {
        itemname: 'jscourse',
        price: 2599
    },
    {
        itemname: 'pythoncourse',
        price: 6599
    },
    {
        itemname: 'cppcourse',
        price: 4599
    },
    {
        itemname: 'webdevcourse',
        price: 1599
    },
    {
        itemname: 'datasciencecourse',
        price: 34567
    },
]
const shopadd = shoppingcart.reduce((acc, val) => acc + val.price,0) // here i have to intoduce a functionality that every prices that are in the shopping cart i have to add it here
console.log(shopadd); // here it's simple but in app we have to verify that in accumulator we are getting a number or string we have to verify that

// acc is used for intial value that's 0 and val is used to trac down the current value starts from 2599