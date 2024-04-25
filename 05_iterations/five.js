const coding = ["js" , "ruby" , "python" ,'cpp' , "java"]

//for - each loop : it's a higher order function
//callback functions dosen;t have name 

// coding.forEach(function (val){
//   console.log(val);
// } )

// coding.forEach(  (val) =>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((val,index,arr) =>{
// console.log(val,index,arr);
// } )

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
myCoding.forEach((item) => {
    console.log(item.languagefilename);  // js java py
})