// function saymyname(params) {
//     console.log("p");
// console.log("r");
// console.log("i");
// console.log("y");
// console.log("a");
// console.log("n");
// console.log("s");
// console.log("h");
// console.log("u");
// } 
// saymyname()





// function addtwonumbers(number1,number2) {
//     console.log(number1+number2);  // console priting dosen't mean it will return the value -> console printing mean it will only print to the consoole 
// }

// addtwonumbers(444444,12)

// const res = addtwonumbers(4,5)
// console.log("result:" , res); //result: undefined -> return type
















// function addtwonumbers(number1,number2) {
//     let result = number1 + number2
//      console.log("kashyap");
//     return result
    
//  return number1 + number2       //both are same
// }

//const res = addtwonumbers(3,4)
// console.log("res:" , res);        //res: 7


// function addtwonumbers(number1,number2) {
//     let result = number1 + number2
//  return result
    
// }

// addtwonumbers(3,4)        // function get executed but the value wont't get printed because we didn't command that i want to get printed on the console 







// function loginusermessage(username = "kashyap" ){
//     if(username === undefined)
//     {
//         console.log("please enter a username");
//         return //after returning it won't go to next instruction it will just return it
//     }
//     return `${username} just logged in`
// }
// //console.log(loginusermessage());                   //unddefined bcoz we didn't pass anything
// console.log(loginusermessage("priyanshu"));          //overwrite the value which is kashyap => o/p : priyanshu













// function loginusermessage(username ="sam"  ){
//     if(username === undefined) //after declaring same it wont't go to this statement
//     {
//         console.log("please enter a username");
//        // return //after returning it won't go to next instruction it will just return it
//     }
//     return `${username} just logged in`
// }

// console.log(loginusermessage());
 








//+++++++0bjects and functions




// function calculateCartPrice( ...num1){
//     return num1
// }

//  console.log(calculateCartPrice(200, 400, 500, 2000)) //it will bind all the value in the array , it can accept any number of arguments




// function calculatedprice(val1 ,val2 , ...num1){
 
//     return num1

// }
// console.log(calculatedprice(100,200,400,500));    //o/p: [ 400, 500 ]






 const user = {   //user is a object
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){    //i took anyobject in the parameter here because  i want to be it generic , means  now i can  pass anyobject in here
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);   //function dosent what will come first (username,price) it will decide with the help of method that's anyobject
}
handleObject(user)

// const mynewarray = [200,400,500,1000]

// function returnsecondvalue(getarray){
//     return getarray[1] //we have to keep in mind what parameter is here and we will return that myarray is genericname it can be anything 
// }

// console.log(returnsecondvalue(mynewarray));

const myarr = [100,3,41,332]


function returnfirstvalue(changedarr) {
    return changedarr[0] 
}
function returnthirdvalue(changedarr) {
    return changedarr[2] 
}

console.log(returnfirstvalue(myarr));
console.log(returnthirdvalue(myarr));