//Dates

let mydate = new Date()
// console.log(mydate);                             // 2024-04-19T10:30:16.988Z
// console.log(mydate.toString());                   //Sun Jun 23 2024 16:21:19 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString());              //Fri Apr 19 2024
// console.log(mydate.toISOString);                 //[Function: toISOString]
//  console.log(mydate.toJSON());                   //2024-04-19T10:34:31.234Z 
//  console.log(mydate.toLocaleString());           //4/19/2024, 10:34:31 AM
//  console.log(mydate.toLocaleDateString());       //4/19/2024

 //creating date

 let myCreateddate = new Date(2023,0,23)
 console.log(myCreateddate.toDateString());  //Mon Jan 23 2023
 
 let myCreateddate1 = new Date("2023-01-13") //Syntax is YY-MM-DD
 console.log(myCreateddate.toLocaleString()); //1/23/2023, 12:00:00 AM
 
 let myTimeStamp = Date.now()

console.log(myTimeStamp); //1719160045973 => Value in millisecond
// console.log(myCreatedDate.getTime());  //bcoz this date is a obj we can use methods , what's gettime method() //w3 school(reference)
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.toLocaleString('default',{
    weekday:"long",
   
}))

let my = new Date()
// console.log(my);
// console.log(myTimeStamp);


let d = new Date()
//console.log(d.toLocaleString('en-IN',{timeZone: 'Asia/Kolkata'})); //for IST => 'en-IN' specifies the locale for India (English in India).
                                                                   //{ timeZone: 'Asia/Kolkata' } specifies the time zone for Indian Standard Time (IST) 


