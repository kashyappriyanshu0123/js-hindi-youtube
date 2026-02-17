const coding = ["js" , "ruby" , "python" ,'cpp' , "java"]

//for - each loop : it's a higher order function
//callback functions dosen't have name 

// some loops are added directly in the array properties as per instance i can say for each loop

// coding.forEach(function (val){         // val will bring each element of array as a parameter cause this function is running inside the array, then i can manipulate the value in the body of the function and automatically this function will execute every time until it will traverse the whole array
//   console.log(val);
// } )

// coding.forEach( (items) => {
//     console.log(items);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //here i have to just give reference the printing will be done without execution means i don't have to give this bracket()

// coding.forEach((item,ind,arr)=>{
//   console.log(item,ind,arr);
// })

const myCoding = [ //objects inside the array
    {
        language : "javascript",
        languagefilename : "js"
    },
    {
        language : "java",
        languagefilename : "java"
    },
    {
        language : "python",
        languagefilename : "py"
    },
]
// myCoding.forEach((item) => {
//     console.log(item.languagefilename);  // js java py
// })