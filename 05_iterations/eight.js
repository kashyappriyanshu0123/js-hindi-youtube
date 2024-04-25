//reduce method

const mynums = [1, 2, 3]

// const mytotal = mynums.reduce( function (acc , currval) {
//    console.log(`acc : ${acc} and currval ${currval}`);     //it's for better readability
//   return acc + currval
     
// } ,0) //initial val = 0
  
 
//both are same

 
const mytotal = mynums.reduce( (acc,curr) => acc+curr , 0) //initial value 0
 
//console.log(mytotal);





const shoppingcart = [
    {
        itemname : 'jscourse',
        price : 2599
    },
    {
        itemname : 'pythoncourse',
        price : 6599
    },
    {
        itemname : 'cppcourse',
        price : 4599
    },
    {
        itemname : 'webdevcourse',
        price : 1599
    },
    {
        itemname : 'datasciencecourse',
        price : 34567
    },
]
const shopadd = shoppingcart.reduce( (acc, val) => acc + val.price,0 )
console.log(shopadd);
