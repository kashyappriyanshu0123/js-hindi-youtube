// i want a method which is attached with all the strings 
//where i can see string , the string should  by default come up  with a method called  trueLength

let myheros = ["thor","spiderman"]

let heropower = {
    thor : "hammer",
    spiderman : "sling",

    getspiderpower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function(){ // i have accessed top level hierarchy and trying to check if object,array can access it or not eventually i got the access of the functionality of this hitesh to everything
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

//heropower.hitesh()   // heropower is an object , so technically it must have  hitesh functionality
//array is also gone through hierarchy of objects so it can also access hitesh functionality beacuse everything is an object when it follow prototypal inheritance

//myheros.hitesh()

//myheros.heyHitesh()
//heropower.heyHitesh() // it will thorw an error stating that i can't access heyhitesh functionality because it's  accessible for array only , object will not get access of heyhitesh 


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //Does that mean TAsupport  will access property of user
}

Teacher.__proto__ = User  //Does that mean Teacher Teacher will access propert user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //now teachingsupport will access property of teacher 

let anotherusername = "priyanshu kashyap     "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
    
    
}

anotherusername.truelength()

"hitesh".truelength() // the current context here is hitesh so this will refer to "hitesh"
"iceTea".truelength()