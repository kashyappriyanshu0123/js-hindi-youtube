let a = 300
if(true)
{
    let a =10
    const b=20
   // console.log("inner",a); //inner 10
}
//console.log(a); // 300

//scope level and mini hoisting

function one(){
    const username = "priyanshu"
    function two(){  //two can access one because for one twois global (child function can access parent function)
        const website = "youtube"
        console.log("username is:",username);
    }
   // console.log(website); //->it will give error if we run it because it's out of the scope
   // two()
}
one()