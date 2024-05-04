// let myname = "priyanshu   "
// let mychannel = "chai     "

// console.log(myname.truelength);

let myheros = ["thor" , "spiderman"]

let heropower = {
    thor : "hammer",
    spiderman : "sling",

 getspiderpower : function(){  
      console.log(`spidy power is ${this.spiderman}`); //how did the function know that i am talking about heropower object(with the help of this keyword) i have to use this fo accessing it's properties
  }
}

Object.prototype.priyanshu  = function(){
    console.log(`priyanshu is present in all objects`);
}
Array.prototype.heypriyanshu = function(){
    console.log((`priyanshu kashyap `));
}
//heropower.priyanshu()  //Both are correct
//myheros.priyanshu()

// myheros.heypriyanshu()
// heropower.heypriyanshu() // this will throw an error because i have gave functionality to only array

//inheritance
const user ={
  name :"priyanshu",
  email : "kashyap@!23.com"
}

const teacher = {
   makevideo : true
}

const teachingsupport = { 
  isavailable : true
}
const tasupport = {
    makeassignment : 'js assignment',
    fulltime : 'true',

}

Object.setPrototypeOf(teachingsupport,teacher)


let anotherusername = "chai aur code"

String.prototype.truelength = function(){
    console.log(`${this}`); //(chai aur code) -> because anotherusername have reference of chai aur code
    console.log(`true length is ${this.trim().length}`);

}
anotherusername.truelength()
"hitesh".truelength()
"iceTea".truelength()