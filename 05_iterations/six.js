//const coding = ["js", "ruby" ,'java' ,"python",'cpp']

//for each dosen't return any value

// const value = coding.forEach((item) => {
//    return item
// } )
// console.log(value);  //undefined



//Filter

//mynums.filter()    //filter also takes callback function





//const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums1= mynums.filter( (num) => num > 4 )    // if i'm using filter then i will get a callback function with that , and within that i can access each value with the help of num , after that i'll give a condition whichever value satisfy that condition will get returned   
// console.log(newnums1);

// const newnums = mynums.filter( (num) => 
// {      
//   num > 4                         //if i'm using this scope or opening this scope then i have to return it
//   //  return num > 4                  
// })
// console.log(newnums);       




//const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = []

// mynums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);





const books = [
    { title : 'Book one' , genre : 'fiction' , publish : 1981, edition : 2004},
    { title : 'Book two' , genre : 'non - fiction' , publish : 1992 , edition : 2008},
    { title : 'Book Three' , genre : 'History' , publish : 1999 , edition : 2013},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 // const userbooks = books.filter( (bk) => bk.genre === 'History')   // the object which is coming from array we named it bk

 // console.log(userbooks);

 const userbooks = books.filter((bk) =>  {
    return bk.publish>=2000
 })
console.log(userbooks);

//   const userbooks1 = books.filter( (bok) => bok.publish > 2000 )
// console.log(userbooks1);



// const userbooks = books.filter( (bk) => {
//    return bk.publish >=1995 && bk.genre === 'History'
// })

// console.log(userbooks);
