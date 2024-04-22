let a = 300
if(true)
{
    let a =10
    const b=20
   // console.log("inner",a); //inner 10
}
//console.log(a); // 300







//scope level and mini hoisting





/*

function one(){
    const username = "priyanshu"
    function two(){  //two can access one because for one twois global (child function can access parent function)
        const website = "youtube"
        //console.log("username is:",username);
    }
   // console.log(website); //->it will give error if we run it because it's out of the scope
   // two()
}
//one()
*/








if(true)
{
    const usernames = "priyanshu"
    if(usernames === "priyanshu")
    {
        const website = "youtube"
        console.log(usernames + website);
    }
   // console.log(website); -> i can't access  this because it's out of the scope of if
}
//console.log(username); // i can't access this too

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // -> this is valid we can call  the function before declaring it

function addone(num){
    return num + 1
}



//addTwo(5) //i can't write this before declaring the function (it's kept in the variable that's why it's not valid)
const addTwo = function(num){ //in js variables are very powerful it can hold anything json values,functions
    return num + 2
} 