//Immediately invoked function expression(iife)

//Named iife
(function chai(){
    console.log('DB connected');
    
} )(); //semicolon is important to stop this iife if i want to use another iife i have to apply the semicolon after the function execution

//unnamed iife
( (name) => { // passing name in the parameters
    console.log(`DB connected two ${name}`);
    
})(`kashyap`)