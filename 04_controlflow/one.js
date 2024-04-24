// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

 const score = 200

if(score > 100)
{
    const power = "fly"
    console.log(`Use power : ${power}`);
}
//.log(`Use power : ${power}`); //it will throw error because power is defined inside the if block




//const balance = 1000

//if(balance >= 500) console.log("test"),console.log("test2");

// if(balance < 500)
// {
//     console.log("less than 500");
// }
// else if(balance < 750)
// {
//     console.log("less than 750");
// }
// else if(balance < 100)
// {
//     console.log("less than 1000");
// }
// else
// {
//     console.log("less than 1200");
// }


const userlggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(userlggedin && debitcard && 2==3)
{
    console.log("allow to buy course");
}
if(loggedinfromgoogle || loggedinfromemail)
{
    console.log("user logges in");
}
