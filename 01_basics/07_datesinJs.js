//Dates

let mydate = new Date()
// console.log(mydate);  // 2024-04-19T10:30:16.988Z
// console.log(mydate.toString()); 
// console.log(mydate.toDateString()); //Fri Apr 19 2024
// console.log(mydate.toISOString);//[Function: toISOString]
//  console.log(mydate.toJSON());  //2024-04-19T10:34:31.234Z 
//  console.log(mydate.toLocaleString());    //4/19/2024, 10:34:31 AM
 console.log(mydate.toLocaleDateString());  //4/19/2024

 //creating date

 let myCreateddate = new Date(2023,0,23)
 //console.log(myCreateddate.toDateString());  //Mon Jan 23 2023
 
 let myCreateddate1 = new Date("2023-01-13") //Syntax is YY-MM-DD
 //console.log(myCreateddate.toLocaleString()); //1/23/2023, 12:00:00 AM
 
 let myTimeStamp = Date.now()

//console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  //bcoz this date is a obj we can use methods , what's gettime method() //w3 school(reference)
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+ 1);


let my = new Date()
console.log(my);
console.log(myTimeStamp);